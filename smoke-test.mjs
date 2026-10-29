import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const script = fs.readFileSync('experience.js', 'utf8');
const workflowScript = fs.readFileSync('workflows.js', 'utf8');
const routes = [
  '/', '/about/', '/services/',
  ...['site-preparation','roads-asphalting','excavation-rock-cutting','mining-quarry','pipelines-power','landscape-irrigation','sewer-systems','fencing-hoarding','demolition','bulk-backfilling','storm-drainage','refurbishment'].map(slug=>`/services/${slug}/`),
  '/projects/', '/projects/king-salman-park-alyamama/', '/equipments/', '/work-in-action/', '/contact/'
];
const official = {
  en: 'Qimam Al-Intaj Contracting Co. Ltd.',
  ar: 'شركة قمم الإنتاج للمقاولات المحدودة'
};

for (const language of ['en', 'ar']) {
  for (const route of routes) {
    const app = { innerHTML: '' };
    const elements = {
      app,
      'language-button': { addEventListener() {} },
      'menu-button': { addEventListener() {}, setAttribute() {} },
      'site-header': { classList: { toggle() {} } },
      intro: { remove() {} }
    };
    const doc = {
      title: '',
      documentElement: { lang: '', dir: '' },
      body: { classList: { remove() {}, toggle() { return false; } } },
      addEventListener() {},
      getElementById(id) { return elements[id] ?? null; },
      querySelector(selector) { return selector === 'meta[name="description"]' ? { content: '' } : null; },
      querySelectorAll() { return []; }
    };
    const storage = { getItem(key) { return key === 'qimam-language' ? language : '1'; }, setItem() {} };
    const context = {
      document: doc,
      localStorage: storage,
      sessionStorage: storage,
      location: { pathname: route, hash: '', origin: 'http://localhost:4173' },
      history: { pushState() {} },
      window: {},
      matchMedia: () => ({ matches: true }),
      addEventListener() {},
      requestAnimationFrame() {},
      scrollY: 0,
      URL,
      Date,
      console
    };
    context.window = context;
    vm.runInNewContext(workflowScript, context, { filename: 'workflows.js' });
    vm.runInNewContext(script, context, { filename: 'experience.js' });
    if (!app.innerHTML.includes('/assets/qimam-official-logo.png')) throw new Error(`Official logo absent: ${route} ${language}`);
    if (!app.innerHTML.includes(official[language])) throw new Error(`Company name absent: ${route} ${language}`);
    if (!app.innerHTML.includes('<main id="main-content">')) throw new Error(`Main content absent: ${route} ${language}`);
    if (doc.documentElement.dir !== (language === 'ar' ? 'rtl' : 'ltr')) throw new Error(`Direction wrong: ${route} ${language}`);
    if (route === '/about/' && !app.innerHTML.includes(language === 'ar' ? 'صنهات بن زيد العتيبي' : 'Sinhat bin Zaid Al-Otaibi')) throw new Error(`Chairman details absent: ${language}`);
    if (route === '/about/' && !app.innerHTML.includes('chairman-final.jpeg')) throw new Error(`Supplied chairman portrait absent: ${language}`);
    if (route === '/') {
      if (!app.innerHTML.includes('class="clients-section"')) throw new Error(`Client logo section absent: ${language}`);
      if ((app.innerHTML.match(/class="client-logo"/g) || []).length !== 26) throw new Error(`Client logos missing: ${language}`);
    }
    if (route === '/equipments/' && /378|\bunits\b|\bunit\b/i.test(app.innerHTML)) throw new Error(`Equipment count leaked: ${language}`);
    if (route === '/equipments/' && language === 'en') {
      for (const name of ['Excavator','Bulldozer','Wheel loader','Grader','Dump trucks','Diesel tanker','Water tanker','Asphalt paver','Asphalt milling machine','Roller compactor','Crusher','Backhoe loader','Mobile crane']) if (!app.innerHTML.includes(name)) throw new Error(`Equipment missing: ${name}`);
      if ((app.innerHTML.match(/class="equipment-item reveal"/g) || []).length !== 13) throw new Error('Equipment cards missing');
      if ((new Set([...app.innerHTML.matchAll(/equipment-sany-[\w-]+\.(?:jpg|png)/g)].map(match => match[0]))).size !== 11) throw new Error('SANY product images missing or duplicated');
    }
    if (route.startsWith('/services/') && route !== '/services/' && (!app.innerHTML.includes('<ol>') || !app.innerHTML.includes('<ul>'))) throw new Error(`Service workflow absent: ${route} ${language}`);
  }
}
for (const image of script.matchAll(/(?:image:'|src=\\"\$\{A\})([\w-]+\.(?:jpeg|jpg|png))/g)) {
  if (!fs.existsSync(path.join('assets', image[1]))) throw new Error(`Missing asset: ${image[1]}`);
}
console.log('Verified all primary routes in English and Arabic, official logo, company name, Chairman details, and equipment-count removal.');
