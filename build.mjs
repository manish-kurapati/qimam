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
  <meta name="theme-color" content="#10374d">
  <meta name="description" content="شركة قمم الإنتاج للمقاولات العامة — مقاول مصنف بالدرجة الأولى متخصص في الأعمال الترابية والبنية التحتية، سفلتة الطرق، وتأهيل المواقع في المملكة العربية السعودية.">
  <title>Qimam Al-Intaj Contracting Co. | شركة قمم الإنتاج للمقاولات</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Manrope:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/style.css?v=${Date.now()}">
</head>
<body>
  <div id="app"></div>
  <script src="/app.js?v=${Date.now()}" defer></script>
</body>
</html>`;

for (const route of routes) {
  const dir = path.join('dist', route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), htmlTemplate);
}

for (const file of ['style.css', 'app.js']) {
  fs.copyFileSync(file, path.join('dist', file));
}

fs.cpSync('assets', 'dist/assets', { recursive: true });
fs.writeFileSync('index.html', htmlTemplate);
console.log(`Successfully built ${routes.length} static routes, wrote root index.html, and copied all assets.`);
