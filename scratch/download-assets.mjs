// scratch/download-assets.mjs
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'QMAMBot/1.0 (info@qmam.sa)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', err => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

const assetsToDownload = [
  {
    name: 'equipment-excavator.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Caterpillar_349_%2814817494141%29.jpg/1200px-Caterpillar_349_%2814817494141%29.jpg'
  },
  {
    name: 'equipment-grader.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Caterpillar_motor_grader_left_AGSEM.jpg/1200px-Caterpillar_motor_grader_left_AGSEM.jpg'
  },
  {
    name: 'equipment-loader.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Caterpillar_950k_Wheel_Loader.jpg/1200px-Caterpillar_950k_Wheel_Loader.jpg'
  },
  {
    name: 'equipment-crusher.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kleemann_MR_130_Z_EVO_mobile_impact_crusher.jpg/1200px-Kleemann_MR_130_Z_EVO_mobile_impact_crusher.jpg'
  },
  {
    name: 'service-rock-blasting.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Aru-L%C3%B5una_quarry_blasting.jpg/1280px-Aru-L%C3%B5una_quarry_blasting.jpg'
  },
  {
    name: 'service-pipeline-utility.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/New_water_pipeline_installation_-_geograph.org.uk_-_6244744.jpg/1280px-New_water_pipeline_installation_-_geograph.org.uk_-_6244744.jpg'
  }
];

const targetDir = path.resolve('assets');

for (const item of assetsToDownload) {
  const dest = path.join(targetDir, item.name);
  console.log(`Downloading ${item.name}...`);
  try {
    await downloadFile(item.url, dest);
    const stats = fs.statSync(dest);
    console.log(`✓ Saved ${item.name} (${(stats.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`✗ Error downloading ${item.name}:`, err.message);
  }
}
