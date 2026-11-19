import crypto from 'node:crypto';

export const config = { api: { bodyParser: false } };
const fields = new Set(['text', 'src', 'alt', 'href']);
const routeOk = value => typeof value === 'string' && value.length <= 160 && /^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(value);
const keyOk = value => typeof value === 'string' && value.length <= 255 && /^[a-z0-9/:-]+$/.test(value);
const reply = (res, status, data) => {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(JSON.stringify(data));
};
const base = () => process.env.SUPABASE_URL || 'https://uiqtblxolrxvxojirrou.supabase.co';
const key = () => process.env.SUPABASE_SERVICE_ROLE_KEY;
async function db(path, method = 'GET', data, extra = {}) {
  const response = await fetch(base() + path, {
    method,
    headers: { apikey: key(), Authorization: `Bearer ${key()}`, ...(data !== undefined ? { 'Content-Type': 'application/json', Prefer: 'return=representation' } : {}), ...extra },
    body: data === undefined ? undefined : JSON.stringify(data)
  });
  if (!response.ok) throw new Error(`Supabase ${response.status}: ${(await response.text()).slice(0, 200)}`);
  if (response.status === 204 || response.headers.get('content-length') === '0') return [];
  const text = await response.text();
  return text ? JSON.parse(text) : [];
}
const hash = pass => { const salt = crypto.randomBytes(16).toString('hex'); return `${salt}:${crypto.scryptSync(pass, salt, 64).toString('hex')}`; };
function verify(pass, stored) {
  if (typeof stored !== 'string') return false;
  const [salt, hex] = stored.split(':');
  if (!/^[a-f0-9]{32}$/.test(salt || '') || !/^[a-f0-9]{128}$/.test(hex || '')) return false;
  const actual = crypto.scryptSync(pass, salt, 64);
  return crypto.timingSafeEqual(actual, Buffer.from(hex, 'hex'));
}
const mac = value => crypto.createHmac('sha256', key()).update(value).digest('hex');
function session(req, passwordHash) {
  const cookie = (req.headers.cookie || '').match(/(?:^|;\s*)qimam_admin=([^;]+)/)?.[1];
  if (!cookie) return null;
  const [payload, signature] = cookie.split('.');
  if (!payload || !/^[a-f0-9]{64}$/.test(signature || '')) return null;
  const expected = mac(payload);
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return data.exp > Date.now() && data.version === mac(passwordHash) ? data : null;
  } catch { return null; }
}
function setSession(res, passwordHash) {
  const data = { exp: Date.now() + 12 * 60 * 60 * 1000, csrf: crypto.randomBytes(24).toString('hex'), version: mac(passwordHash) };
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url');
  res.setHeader('Set-Cookie', `qimam_admin=${payload}.${mac(payload)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=43200${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`);
  return data;
}
async function body(req) {
  const chunks = []; let size = 0;
  for await (const chunk of req) { size += chunk.length; if (size > 11 * 1024 * 1024) throw new Error('Request too large.'); chunks.push(chunk); }
  return Buffer.concat(chunks);
}
function part(bytes, boundary, name) {
  const marker = Buffer.from('--' + boundary); let offset = 0;
  while (true) {
    const start = bytes.indexOf(marker, offset); if (start < 0) return null;
    const header = bytes.indexOf('\r\n\r\n', start); if (header < 0) return null;
    const next = bytes.indexOf(marker, header + 4); if (next < 0) return null;
    if (bytes.subarray(start, header).toString().includes(`name="${name}"`)) return bytes.subarray(header + 4, next - 2);
    offset = next;
  }
}
function imageType(bytes) {
  if (bytes.subarray(0, 3).equals(Buffer.from([255, 216, 255]))) return ['jpg', 'image/jpeg'];
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return ['png', 'image/png'];
  if (['GIF87a', 'GIF89a'].includes(bytes.subarray(0, 6).toString())) return ['gif', 'image/gif'];
  if (bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP') return ['webp', 'image/webp'];
  return null;
}
export default async function handler(req, res) {
  try {
    if (!key()) return reply(res, 503, { error: 'Admin is temporarily unavailable. Please try again later.' });
    const url = new URL(req.url, 'http://localhost'); const action = url.searchParams.get('action');
    if (action === 'content' && req.method === 'GET') {
      const route = url.searchParams.get('route') || '/'; const lang = url.searchParams.get('lang') || 'en';
      if (!routeOk(route) || !['en', 'ar'].includes(lang)) return reply(res, 400, { error: 'Invalid route or language.' });
      const rows = await db(`/rest/v1/cms_content?select=element_key,field,value&route=eq.${encodeURIComponent(route)}&language=eq.${lang}`);
      return reply(res, 200, { items: rows });
    }
    const admin = (await db('/rest/v1/cms_admin?select=password_hash&id=eq.1'))[0];
    const auth = session(req, admin?.password_hash || '');
    if (action === 'status' && req.method === 'GET') return reply(res, 200, { authenticated: !!auth, csrf: auth?.csrf || null });
    if (req.method !== 'POST') return reply(res, 405, { error: 'Method not allowed.' });
    const bytes = await body(req);
    let data = {};
    if (action !== 'upload') { try { data = JSON.parse(bytes.toString()); } catch { return reply(res, 400, { error: 'Invalid JSON.' }); } }
    if (action === 'login') {
      const pass = String(data.passcode || '');
      const ip = crypto.createHash('sha256').update(String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim()).digest('hex');
      const attempts = (await db(`/rest/v1/cms_login_attempts?select=attempts,window_start&ip=eq.${encodeURIComponent(ip)}`))[0];
      const fresh = !attempts || Date.now() - Date.parse(attempts.window_start) > 900000;
      if (!fresh && attempts.attempts >= 5) return reply(res, 429, { error: 'Too many attempts. Try again in 15 minutes.' });
      const initial = process.env.QIMAM_ADMIN_PASSCODE || '';
      const valid = pass.length <= 200 && (admin ? verify(pass, admin.password_hash) : initial.length >= 12 && initial.length <= 200 && pass === initial);
      if (!valid) {
        await db('/rest/v1/cms_login_attempts?on_conflict=ip', 'POST', { ip, attempts: fresh ? 1 : attempts.attempts + 1, window_start: fresh ? new Date().toISOString() : attempts.window_start }, { Prefer: 'resolution=merge-duplicates,return=minimal' });
        return reply(res, 401, { error: 'Incorrect passcode.' });
      }
      await db('/rest/v1/cms_login_attempts?ip=eq.' + encodeURIComponent(ip), 'DELETE');
      let stored = admin?.password_hash;
      if (!stored) {
        stored = hash(pass);
        await db('/rest/v1/cms_admin', 'POST', { id: 1, password_hash: stored });
      }
      return reply(res, 200, { ok: true, csrf: setSession(res, stored).csrf });
    }
    if (!auth) return reply(res, 401, { error: 'Please log in.' });
    if (req.headers.origin && new URL(req.headers.origin).host !== req.headers.host) return reply(res, 403, { error: 'Origin rejected.' });
    if (action === 'upload') {
      const boundary = String(req.headers['content-type'] || '').match(/boundary=(?:"([^"]+)"|([^;]+))/)?.slice(1).find(Boolean);
      if (!boundary || part(bytes, boundary, 'csrf')?.toString() !== auth.csrf) return reply(res, 403, { error: 'Invalid security token.' });
      const file = part(bytes, boundary, 'file');
      if (!file || file.length > 10 * 1024 * 1024 || !imageType(file)) return reply(res, 400, { error: 'Choose a JPG, PNG, WebP or GIF under 10 MB.' });
      const [ext, mime] = imageType(file); const name = crypto.randomBytes(16).toString('hex') + '.' + ext;
      const uploaded = await fetch(`${base()}/storage/v1/object/cms-media/${name}`, { method: 'POST', headers: { apikey: key(), Authorization: `Bearer ${key()}`, 'Content-Type': mime, 'Cache-Control': '3600' }, body: file });
      if (!uploaded.ok) throw new Error(`Storage ${uploaded.status}: ${(await uploaded.text()).slice(0, 200)}`);
      return reply(res, 201, { url: `${base()}/storage/v1/object/public/cms-media/${name}` });
    }
    if (data.csrf !== auth.csrf) return reply(res, 403, { error: 'Invalid security token.' });
    if (action === 'logout') { res.setHeader('Set-Cookie', 'qimam_admin=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'); return reply(res, 200, { ok: true }); }
    if (action === 'change-passcode') {
      const next = String(data.newPasscode || '');
      if (next.length < 12 || next.length > 200) return reply(res, 400, { error: 'New passcode must be 12–200 characters.' });
      if (!verify(String(data.currentPasscode || ''), admin.password_hash)) return reply(res, 403, { error: 'Current passcode is incorrect.' });
      const nextHash = hash(next);
      await db('/rest/v1/cms_admin?id=eq.1', 'PATCH', { password_hash: nextHash });
      const refreshed = setSession(res, nextHash);
      return reply(res, 200, { ok: true, csrf: refreshed.csrf });
    }
    const { route, lang, key: elementKey, field } = data;
    if (!routeOk(route) || !['en', 'ar'].includes(lang) || !keyOk(elementKey) || !fields.has(field)) return reply(res, 400, { error: 'Invalid content.' });
    const where = `route=eq.${encodeURIComponent(route)}&language=eq.${lang}&element_key=eq.${encodeURIComponent(elementKey)}&field=eq.${field}`;
    if (action === 'delete') { await db('/rest/v1/cms_content?' + where, 'DELETE'); return reply(res, 200, { ok: true }); }
    if (action === 'save') {
      const value = data.value;
      if (typeof value !== 'string' || value.length > 20000) return reply(res, 400, { error: 'Invalid content.' });
      if (field === 'src' && !/^\/(?:assets|uploads)\/[a-zA-Z0-9._/-]+$/.test(value) && !value.startsWith(`${base()}/storage/v1/object/public/cms-media/`)) return reply(res, 400, { error: 'Choose a site image.' });
      if (field === 'href' && !/^(?:\/(?!\/)|https?:\/\/|mailto:|tel:)/i.test(value)) return reply(res, 400, { error: 'Invalid link.' });
      await db('/rest/v1/cms_content?on_conflict=route,language,element_key,field', 'POST', { route, language: lang, element_key: elementKey, field, value }, { Prefer: 'resolution=merge-duplicates,return=minimal' });
      return reply(res, 200, { ok: true });
    }
    return reply(res, 404, { error: 'Unknown action.' });
  } catch (error) {
    console.error('CMS request failed:', error);
    return reply(res, 503, { error: 'Admin is temporarily unavailable. Please try again later.' });
  }
}
