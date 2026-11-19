(function () {
  const preview = new URLSearchParams(location.search).has('cms_preview');
  const validFields = new Set(['text', 'src', 'alt', 'href']);

  function route() { return location.pathname.replace(/\/+$/, '') || '/'; }
  function keyFor(element, textIndex) {
    const parts = [];
    for (let el = element; el && el.id !== 'app'; el = el.parentElement) {
      if (!el.parentElement) return null;
      const siblings = Array.from(el.parentElement.children).filter(sibling => sibling.tagName === el.tagName);
      parts.unshift(`${el.tagName.toLowerCase()}:${siblings.indexOf(el)}`);
    }
    return parts.join('/') + (textIndex == null ? '' : `/text:${textIndex}`);
  }
  function find(key) {
    const parts = key.split('/');
    let el = document.getElementById('app');
    for (const part of parts) {
      const [tag, number] = part.split(':');
      if (tag === 'text') return el?.childNodes[Number(number)] || null;
      el = Array.from(el?.children || []).filter(child => child.tagName.toLowerCase() === tag)[Number(number)];
      if (!el) return null;
    }
    return el;
  }
  function setValue(key, field, value) {
    if (!validFields.has(field)) return;
    const node = find(key);
    if (!node) return;
    if (field === 'text' && node.nodeType === Node.TEXT_NODE) {
      const current = node.nodeValue || '';
      node.nodeValue = (current.match(/^\s*/)?.[0] || '') + value + (current.match(/\s*$/)?.[0] || '');
    } else if (node instanceof Element && field !== 'text') {
      if (field === 'src' && !node.matches('img')) return;
      if (field === 'href' && !node.matches('a')) return;
      node.setAttribute(field, value);
    }
  }
  async function apply() {
    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const currentRoute = route();
    try {
      const get = async path => {
        const response = await fetch(`/api/cms.php?action=content&route=${encodeURIComponent(path)}&lang=${lang}`, { cache: 'no-store' });
        return response.ok ? (await response.json()).items || [] : [];
      };
      const global = currentRoute === '/' ? [] : await get('/');
      const items = await get(currentRoute);
      if (route() !== currentRoute || document.documentElement.lang !== lang) return;
      for (const item of global.filter(x => /^(header|footer):/.test(x.element_key))) setValue(item.element_key, item.field, item.value);
      for (const item of items) setValue(item.element_key, item.field, item.value);
    } catch (_) { /* The static site still works before the CMS is configured. */ }
  }
  function select(target) {
    if (!target?.closest?.('#app')) return;
    let element = target.closest('img');
    let textNode = null;
    if (!element) {
      for (let el = target; el && el.id !== 'app'; el = el.parentElement) {
        const index = Array.from(el.childNodes).findIndex(n => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim());
        if (index !== -1) { element = el; textNode = { node: el.childNodes[index], index }; break; }
        const image = Array.from(el.children).find(child => child.matches('img'));
        if (image) { element = image; break; }
      }
    }
    if (!element) return;
    document.querySelector('.cms-selected')?.classList.remove('cms-selected');
    element.classList.add('cms-selected');
    const link = element.closest('a');
    const fields = element.matches('img') ? ['src', 'alt'] : ['text'];
    if (link) fields.push('href');
    const selected = {};
    for (const field of fields) {
      const subject = field === 'href' ? link : element;
      selected[field] = {
        key: keyFor(subject, field === 'text' ? textNode.index : null),
        value: field === 'text' ? textNode.node.nodeValue.trim() : subject.getAttribute(field) || ''
      };
    }
    const scopeRoute = /^(header|footer):/.test(Object.values(selected)[0].key) ? '/' : route();
    parent.postMessage({ type: 'cms-selection', selected, tag: element.tagName.toLowerCase(), route: route(), scopeRoute }, location.origin);
  }
  if (preview) {
    const style = document.createElement('style');
    style.textContent = '.cms-selected{outline:3px solid #e7ac38!important;outline-offset:3px!important} #intro{display:none!important}';
    document.head.append(style);
    document.addEventListener('click', event => {
      const target = event.target instanceof Element ? event.target : event.target.parentElement;
      if (!target?.closest('#app')) return;
      event.preventDefault(); event.stopImmediatePropagation(); select(target);
    }, true);
    addEventListener('message', event => {
      if (event.origin !== location.origin || event.data?.type !== 'cms-update') return;
      setValue(event.data.key, event.data.field, event.data.value);
    });
  }
  window.qimamCms = { apply, preview };
})();
