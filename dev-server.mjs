import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import handleCms from './api/cms.js';

const port = Number(process.env.PORT || 4173);
const root = path.resolve('dist');
const cmsMode = process.argv.includes('--cms');
const mime = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.json': 'application/json'
};

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let p = decodeURIComponent(url.pathname);
  if (p.startsWith('/api/')) {
    if (cmsMode && p === '/api/cms.php') {
      handleCms(req, res).catch(() => {
        if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        if (!res.writableEnded) res.end(JSON.stringify({ error: 'Local CMS error.' }));
      });
      return;
    }
    res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({ error: 'Run npm run dev:cms with Supabase environment variables to test the admin.' }));
    return;
  }
  if (p.endsWith('.php') || p.startsWith('/backend/') || (p.startsWith('/uploads/') && !cmsMode)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  let f = path.join(root, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) {
    f = path.join(f, 'index.html');
  }
  if (!fs.existsSync(f)) {
    const fallback = path.join(root, 'index.html');
    if (fs.existsSync(fallback) && !path.extname(p)) {
      res.setHeader('content-type', 'text/html; charset=utf-8');
      fs.createReadStream(fallback).pipe(res);
      return;
    }
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.setHeader('content-type', mime[path.extname(f).toLowerCase()] || 'application/octet-stream');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  fs.createReadStream(f).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}`));
