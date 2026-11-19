import http from 'node:http';
import assert from 'node:assert/strict';
import handler from './api/cms.js';

const listen = server => new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server.address().port)));
const close = server => new Promise(resolve => server.close(resolve));
const rows = { admin: null, content: [], attempts: {} };
const backend = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let input = '';
  for await (const chunk of req) input += chunk;
  const data = input && req.headers['content-type']?.includes('json') ? JSON.parse(input) : null;
  const send = (code, value) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(value)); };
  if (url.pathname.endsWith('/cms_admin')) {
    if (req.method === 'GET') return send(200, rows.admin ? [rows.admin] : []);
    if (req.method === 'POST') rows.admin = data;
    if (req.method === 'PATCH') rows.admin = { ...rows.admin, ...data };
    return send(200, rows.admin);
  }
  if (url.pathname.endsWith('/cms_login_attempts')) {
    const ip = url.searchParams.get('ip')?.slice(3) || data?.ip;
    if (req.method === 'GET') return send(200, rows.attempts[ip] ? [rows.attempts[ip]] : []);
    if (req.method === 'POST') rows.attempts[ip] = data;
    if (req.method === 'DELETE') delete rows.attempts[ip];
    return send(200, []);
  }
  if (url.pathname.endsWith('/cms_content')) {
    const match = item => ['route', 'language', 'element_key', 'field'].every(k => !url.searchParams.has(k) || item[k] === url.searchParams.get(k).slice(3));
    if (req.method === 'GET') return send(200, rows.content.filter(match));
    if (req.method === 'POST') { rows.content = rows.content.filter(item => !['route','language','element_key','field'].every(k => item[k] === data[k])); rows.content.push(data); }
    if (req.method === 'DELETE') rows.content = rows.content.filter(item => !match(item));
    return send(200, []);
  }
  if (url.pathname.startsWith('/storage/v1/object/cms-media/')) return send(200, { Key: url.pathname });
  return send(404, { error: 'Unknown mock endpoint' });
});
const api = http.createServer(handler);
const backendPort = await listen(backend);
const apiPort = await listen(api);
process.env.SUPABASE_URL = `http://127.0.0.1:${backendPort}`;
process.env.SUPABASE_SERVICE_ROLE_KEY = 'integration-test-service-key';
process.env.QIMAM_ADMIN_PASSCODE = 'Initial-Test-Passcode-123';
const base = `http://127.0.0.1:${apiPort}/api/cms.php?action=`;
let cookie = '';
let csrf = '';
async function call(action, data) {
  const response = await fetch(base + action + (action === 'content' ? '&route=%2Fabout&lang=en' : ''), {
    method: data ? 'POST' : 'GET',
    headers: { ...(data ? { 'Content-Type': 'application/json' } : {}), ...(cookie ? { Cookie: cookie } : {}) },
    body: data ? JSON.stringify(data) : undefined
  });
  if (response.headers.get('set-cookie')) cookie = response.headers.get('set-cookie').split(';')[0];
  return [response.status, await response.json()];
}
try {
  assert.equal((await call('status'))[1].authenticated, false);
  assert.equal((await call('save', { route: '/about', lang: 'en', key: 'main:0', field: 'text', value: 'Changed' }))[0], 401);
  assert.equal((await call('login', { passcode: 'wrong' }))[0], 401);
  let result = await call('login', { passcode: process.env.QIMAM_ADMIN_PASSCODE });
  assert.equal(result[0], 200); csrf = result[1].csrf;
  assert.equal((await call('save', { route: '/about', lang: 'en', key: 'main:0', field: 'text', value: 'Changed', csrf: 'wrong' }))[0], 403);
  assert.equal((await call('save', { route: '/about', lang: 'en', key: 'main:0', field: 'text', value: 'Changed', csrf }))[0], 200);
  assert.equal((await call('content'))[1].items[0].value, 'Changed');
  assert.equal((await call('delete', { route: '/about', lang: 'en', key: 'main:0', field: 'text', csrf }))[0], 200);
  assert.equal((await call('content'))[1].items.length, 0);
  const form = new FormData();
  form.append('csrf', csrf);
  form.append('file', new Blob([Buffer.from([137,80,78,71,13,10,26,10,0,0,0,0])], { type: 'image/png' }), 'test.png');
  const upload = await fetch(base + 'upload', { method: 'POST', headers: { Cookie: cookie }, body: form });
  assert.equal(upload.status, 201);
  assert.match((await upload.json()).url, /\/storage\/v1\/object\/public\/cms-media\/[a-f0-9]{32}\.png$/);
  assert.equal((await call('change-passcode', { currentPasscode: process.env.QIMAM_ADMIN_PASSCODE, newPasscode: 'Replacement-Passcode-456', csrf }))[0], 200);
  assert.equal((await call('logout', { csrf }))[0], 403); // Passcode change invalidates the earlier CSRF token.
  result = await call('status'); csrf = result[1].csrf;
  assert.equal((await call('logout', { csrf }))[0], 200);
  assert.equal((await call('login', { passcode: process.env.QIMAM_ADMIN_PASSCODE }))[0], 401);
  assert.equal((await call('login', { passcode: 'Replacement-Passcode-456' }))[0], 200);
  console.log('CMS HTTP integration test passed: login, auth, content CRUD, upload, passcode change, logout.');
} finally { await close(api); await close(backend); }
