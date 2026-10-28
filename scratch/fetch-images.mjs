// scratch/fetch-images.mjs
import https from 'https';
import fs from 'fs';
import path from 'path';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function searchUnsplash(query) {
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
  const html = await fetchPage(url);
  const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g;
  const matches = [...new Set(html.match(regex) || [])];
  return matches.slice(0, 10);
}

const queries = ['excavator', 'motor-grader', 'wheel-loader', 'rock-crusher', 'quarry-crushing', 'earthworks-construction', 'pipeline-construction', 'rock-blasting'];

for (const q of queries) {
  try {
    const urls = await searchUnsplash(q);
    console.log(`\n=== Query: ${q} ===`);
    urls.slice(0, 4).forEach(u => console.log(u));
  } catch (err) {
    console.error(q, err.message);
  }
}
