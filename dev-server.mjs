import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const port = Number(process.env.PORT || 4173);
const root = path.resolve('dist');
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
  let p = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
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
}).listen(port, () => console.log(`http://localhost:${port}`));
