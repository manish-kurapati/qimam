// scratch/download-project-images.mjs
import https from 'https';
import fs from 'fs';
import path from 'path';

function dl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'QMAMBot/1.0 (info@qmam.sa)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return dl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode + ' for ' + url));
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => f.close(resolve));
    }).on('error', reject);
  });
}

const items = [
  {
    name: 'assets/project-featured-park.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Excavation%2C_SE_corner_Ontario_and_Richmond%2C_2021_06_30_%2851282989969%29.jpg/1600px-Excavation%2C_SE_corner_Ontario_and_Richmond%2C_2021_06_30_%2851282989969%29.jpg'
  },
  {
    name: 'assets/project-qiddiya-cut.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Komatsu_PC200-8_Hydraulic_Excavator_-Rakhu_Bhagawati%2CMyagdi-0462.jpg/1600px-Komatsu_PC200-8_Hydraulic_Excavator_-Rakhu_Bhagawati%2CMyagdi-0462.jpg'
  },
  {
    name: 'assets/project-nri-foundation.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Excavation_NE_corner_of_Howard_and_Sherbourne%2C_2022_11_12_%2852495684460%29.jpg/1600px-Excavation_NE_corner_of_Howard_and_Sherbourne%2C_2022_11_12_%2852495684460%29.jpg'
  },
  {
    name: 'assets/project-neom-zone.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2026-03-03_Construction_of_Bolotnaya_Embankment_footbridge%2C_earthworks_13.jpg/1600px-2026-03-03_Construction_of_Bolotnaya_Embankment_footbridge%2C_earthworks_13.jpg'
  }
];

for (const it of items) {
  try {
    console.log('Downloading ' + it.name + '...');
    await dl(it.url, it.name);
    console.log('Saved ' + it.name, (fs.statSync(it.name).size / 1024).toFixed(1) + ' KB');
  } catch(e) {
    console.error('Err ' + it.name + ':', e.message);
  }
}
