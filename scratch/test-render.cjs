const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('app.js', 'utf8');
let html = '';
const ctx = {
  location: { pathname: '/work-in-action/' },
  localStorage: { getItem: () => 'en', setItem: () => {} },
  document: {
    documentElement: { lang: '', dir: '' },
    body: { classList: { toggle: () => {}, add: () => {}, remove: () => {} } },
    getElementById: (id) => {
      if (id === 'app') return { set innerHTML(v) { html = v; }, get innerHTML() { return html; } };
      return null;
    },
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  window: { addEventListener: () => {}, scrollTo: () => {} },
  console: console
};
vm.runInNewContext(code, ctx);
const start = html.indexOf('<div class="video-showcase-split">');
const end = html.indexOf('<div class="operations-intro">');
console.log(html.substring(start, end));
