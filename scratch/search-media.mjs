// scratch/search-media.mjs
import https from 'https';

function queryWiki(term) {
  return new Promise((resolve, reject) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size|mime&format=json`;
    https.get(url, { headers: { 'User-Agent': 'QMAMWebsite/1.0 (construction-contractor)' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(d);
          const results = [];
          if (json.query && json.query.pages) {
            for (const k in json.query.pages) {
              const p = json.query.pages[k];
              if (p.imageinfo && p.imageinfo[0]) {
                const info = p.imageinfo[0];
                if (info.mime === 'image/jpeg' || info.mime === 'image/png') {
                  results.push({
                    title: p.title,
                    width: info.width,
                    height: info.height,
                    url: info.url
                  });
                }
              }
            }
          }
          resolve(results);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

const terms = [
  'Caterpillar hydraulic excavator',
  'Caterpillar motor grader',
  'Caterpillar wheel loader',
  'Mobile rock crusher construction',
  'Earthworks road construction cut and fill',
  'Deep rock excavation construction trench',
  'Pipeline construction trenching installation',
  'Urban park earthworks construction'
];

for (const t of terms) {
  console.log(`\n=== SEARCH: ${t} ===`);
  const list = await queryWiki(t);
  list.forEach(r => console.log(`${r.width}x${r.height} | ${r.title} | ${r.url.split('?')[0]}`));
}
