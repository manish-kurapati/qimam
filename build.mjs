import fs from 'node:fs';
import path from 'node:path';

const serviceSlugs = [
  'site-preparation',
  'roads-asphalting',
  'excavation-rock-cutting',
  'landscape-irrigation',
  'sewer-systems',
  'fencing-hoarding',
  'mining-quarry',
  'demolition',
  'bulk-backfilling',
  'pipelines-power',
  'storm-drainage',
  'refurbishment'
];

const projectSlugs = [
  'exit-4-hospital',
  'qiddiya-city-center',
  'camel-festival',
  'neom-luxury-mansion',
  'hittin-project',
  'king-salman-air-base',
  'qiddiya-uptown',
  'dg01-event-parking',
  'dg02-gyratory-tunnels',
  'king-salman-park-alyamama',
  'nri-king-salman-park',
  'kkr-diversion',
  'kkia-infrastructure',
  'hittin-district-roads',
  'al-jadiyah',
  'al-arid-drainage',
  'diriyah-project',
  'university-project',
  'moghames-al-emaar',
  'king-salman-park-haif',
  'nimar-project',
  'king-salman-park-alfanar',
  'al-rayyan-project',
  'al-hada-project',
  'al-nahdha-tower',
  'king-salman-park-alyamama-2026'
];

const routes = [
  '',
  'about',
  'services',
  ...serviceSlugs.map(x => 'services/' + x),
  'equipments',
  'work-in-action',
  'projects',
  ...projectSlugs.map(x => 'projects/' + x),
  'contact'
];

fs.rmSync('dist', { recursive: true, force: true });

const htmlTemplate = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0c2029">
  <meta name="description" content="Qimam Al-Intaj Contracting Co. Ltd. specializes in earthworks, excavation, backfilling and infrastructure-related contracting in Saudi Arabia.">
  <title>Qimam Al-Intaj Contracting Co. Ltd.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Tajawal:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="preload" as="image" href="/assets/hero-earthworks-v2.png" fetchpriority="high">
  <link rel="stylesheet" href="/experience.css?v=${Date.now()}">
</head>
<body>
  <div id="app"></div>
  <script src="/workflows.js?v=${Date.now()}" defer></script>
  <script src="/experience.js?v=${Date.now()}" defer></script>
</body>
</html>`;

for (const route of routes) {
  const dir = path.join('dist', route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), htmlTemplate);
}

for (const file of ['experience.css', 'experience.js', 'workflows.js']) {
  fs.copyFileSync(file, path.join('dist', file));
}

fs.cpSync('assets', 'dist/assets', { recursive: true });
fs.writeFileSync('index.html', htmlTemplate);
fs.writeFileSync('404.html', htmlTemplate);
fs.writeFileSync(path.join('dist', '404.html'), htmlTemplate);
console.log(`Successfully built ${routes.length} static routes, wrote index.html and 404.html, and copied all assets.`);
