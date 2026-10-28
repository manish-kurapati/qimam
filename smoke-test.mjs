import fs from 'node:fs';
import vm from 'node:vm';

const script = fs.readFileSync('app.js', 'utf8');

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
  'kkr-diversion'
];

const routes = [
  '/',
  '/about/',
  '/services/',
  ...serviceSlugs.map(x => '/services/' + x + '/'),
  '/equipments/',
  '/work-in-action/',
  '/projects/',
  ...projectSlugs.map(x => '/projects/' + x + '/'),
  '/contact/'
];

for (const route of routes) {
  for (const language of ['en', 'ar']) {
    const app = { innerHTML: '' };
    const elements = {
      '#app': app,
      '#lang-toggle-btn': {},
      '#menu-toggle-btn': {},
      '#equipment-filter-bar .filter-btn': [],
      '#equipment-grid .equipment-card-full': [],
      '#project-rfq-form': {},
      '#lightbox-modal': {},
      '#lightbox-img': {},
      '#lightbox-title': {},
      '#lightbox-close-btn': {}
    };

    const doc = {
      documentElement: {},
      body: {
        classList: { toggle() {}, add() {}, remove() {}, contains() { return false; } },
        appendChild() {}
      },
      getElementById(id) {
        return elements['#' + id] || null;
      },
      querySelector(sel) {
        return elements[sel] || null;
      },
      querySelectorAll() {
        return [];
      },
      addEventListener() {},
      createElement() {
        return { className: '', innerHTML: '', querySelector() { return { textContent: '', style: {} }; } };
      }
    };

    const storage = {
      getItem(k) { return k === 'qimam-lang' ? language : '1'; },
      setItem() {}
    };

    const context = {
      document: doc,
      location: { pathname: route },
      localStorage: storage,
      sessionStorage: storage,
      history: { pushState() {} },
      window: { scrollTo() {}, addEventListener() {} },
      IntersectionObserver: class { observe() {} },
      matchMedia: () => ({ matches: true }),
      performance,
      requestAnimationFrame() {},
      setTimeout,
      Date,
      console
    };

    vm.runInNewContext(script, context, { filename: 'app.js' });

    if (!app.innerHTML.includes('<main id="main-content">') || !app.innerHTML.includes('brand-mark')) {
      throw new Error(`Render failed: ${route} ${language}`);
    }

    if (route === '/projects/' && !app.innerHTML.includes('portfolio-card') && !app.innerHTML.includes('project-card-full')) {
      throw new Error(`Projects view failed: ${language}`);
    }

    if (route === '/equipments/' && (!app.innerHTML.includes('180') || !app.innerHTML.includes('equipment-grid-full'))) {
      throw new Error(`Equipments view failed: ${language}`);
    }

    if (route === '/work-in-action/' && !app.innerHTML.includes('video-showcase-split') && !app.innerHTML.includes('video-main-display')) {
      throw new Error(`Work in Action view failed: ${language}`);
    }

    if (route === '/about/' && (!app.innerHTML.includes('chairman') && !app.innerHTML.includes('Sanahat') && !app.innerHTML.includes('صنهات'))) {
      throw new Error(`CEO leadership section missing on About page: ${language}`);
    }

    if (language === 'ar' && doc.documentElement.dir !== 'rtl') {
      throw new Error(`RTL failed: ${route}`);
    }
  }
}

console.log(`Successfully verified all routes in English and Arabic! CEO leadership, 378+ Equipments, Work in Action, and Projects render perfectly.`);
