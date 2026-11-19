const $ = id => document.getElementById(id);
let csrf = '';
let pages = [];
let route = '/';
let selected = null;
let scopeRoute = '/';

async function api(action, data, multipart = false) {
  const options = { method: data ? 'POST' : 'GET', credentials: 'same-origin' };
  if (data) {
    if (multipart) options.body = data;
    else { options.headers = { 'Content-Type': 'application/json' }; options.body = JSON.stringify({ ...data, csrf }); }
  }
  let response;
  try { response = await fetch('/api/cms.php?action=' + action, options); }
  catch (_) { throw new Error('Could not reach the CMS. Check PHP hosting and the database setup.'); }
  let result;
  try { result = await response.json(); }
  catch (_) { throw new Error('The server did not return JSON. Check that PHP is enabled on this hosting.'); }
  if (!response.ok) throw new Error(result.error || 'Request failed.');
  return result;
}
function message(id, value, error = false) {
  $(id).textContent = value;
  $(id).classList.toggle('error', error);
}
function pageName(path) {
  if (path === '/') return 'Home';
  return path.split('/').filter(Boolean).at(-1).split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}
function groupName(path) {
  if (path === '/') return 'Main pages';
  const pieces = path.split('/').filter(Boolean);
  return pieces.length === 1 ? 'Main pages' : pieces[0] === 'services' ? 'Service details' : 'Project details';
}
function renderPages() {
  const query = $('page-search').value.trim().toLowerCase();
  $('pages').replaceChildren();
  let group = '';
  for (const path of pages) {
    const name = pageName(path);
    if (!`${name} ${path}`.toLowerCase().includes(query)) continue;
    const nextGroup = groupName(path);
    if (!query && group !== nextGroup) {
      group = nextGroup;
      const heading = document.createElement('div'); heading.className = 'group'; heading.textContent = group;
      $('pages').append(heading);
    }
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = name;
    button.className = path === route ? 'active' : '';
    button.addEventListener('click', () => openPage(path));
    $('pages').append(button);
  }
}
function openPage(path) {
  route = path;
  selected = null;
  $('empty-state').hidden = false;
  $('edit-state').hidden = true;
  $('page-title').textContent = pageName(path);
  renderPages();
  const params = new URLSearchParams({ cms_preview: '1', cms_lang: $('language').value });
  $('preview').src = path + (path.includes('?') ? '&' : '?') + params;
}
function setField() {
  const field = $('field').value;
  if (!selected?.[field]) return;
  $('value').value = selected[field].value;
  $('value-label').textContent = ({ text: 'Text', src: 'Image URL', alt: 'Image description', href: 'Link destination' })[field];
  $('image-tools').hidden = field !== 'src';
  if (field === 'src') $('image-preview').src = selected.src.value;
  message('edit-message', '');
}
function showSelection(data) {
  if (data.route !== route) return;
  selected = data.selected;
  scopeRoute = data.scopeRoute;
  $('field').replaceChildren();
  for (const field of Object.keys(selected)) {
    const option = document.createElement('option');
    option.value = field;
    option.textContent = ({ text: 'Text', src: 'Image', alt: 'Image description', href: 'Link' })[field];
    $('field').append(option);
  }
  $('empty-state').hidden = true;
  $('edit-state').hidden = false;
  setField();
}
async function enter(csrfToken) {
  csrf = csrfToken;
  $('auth').hidden = true;
  $('dashboard').hidden = false;
  try {
    pages = await fetch('/cms-routes.json').then(r => r.json());
    const media = await fetch('/cms-media.json').then(r => r.json());
    for (const url of media) {
      const option = document.createElement('option'); option.value = url;
      option.textContent = url.split('/').at(-1).replace(/[-_]/g, ' ');
      $('media-list').append(option);
    }
  } catch (_) { pages = ['/','/about','/services','/projects','/equipments','/work-in-action','/contact']; }
  openPage('/');
}

$('login-form').addEventListener('submit', async event => {
  event.preventDefault();
  try { const result = await api('login', { passcode: $('passcode').value }); $('passcode').value = ''; await enter(result.csrf); }
  catch (error) { message('auth-message', error.message, true); }
});
$('show-password-change').addEventListener('click', () => {
  $('content-inspector').hidden = true;
  $('password-change-form').hidden = false;
  $('current-passcode').focus();
});
$('cancel-password-change').addEventListener('click', () => {
  $('password-change-form').reset();
  $('password-change-form').hidden = true;
  $('content-inspector').hidden = false;
  message('password-message', '');
});
$('password-change-form').addEventListener('submit', async event => {
  event.preventDefault();
  try {
    const result = await api('change-passcode', { currentPasscode: $('current-passcode').value, newPasscode: $('replacement-passcode').value });
    csrf = result.csrf;
    $('password-change-form').reset();
    message('password-message', 'Passcode changed. Use the new passcode next time you sign in.');
  } catch (error) { message('password-message', error.message, true); }
});
$('page-search').addEventListener('input', renderPages);
$('language').addEventListener('change', () => openPage(route));
$('refresh').addEventListener('click', () => openPage(route));
$('field').addEventListener('change', setField);
$('media-list').addEventListener('change', () => { if ($('media-list').value) { $('value').value = $('media-list').value; $('image-preview').src = $('media-list').value; } });
$('value').addEventListener('input', () => { if ($('field').value === 'src') $('image-preview').src = $('value').value; });
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== $('preview').contentWindow || event.data?.type !== 'cms-selection') return;
  showSelection(event.data);
});
$('save').addEventListener('click', async () => {
  const field = $('field').value;
  if (!selected?.[field]) return;
  const value = $('value').value;
  $('save').disabled = true;
  try {
    await api('save', { route: scopeRoute, lang: $('language').value, key: selected[field].key, field, value });
    selected[field].value = value;
    $('preview').contentWindow.postMessage({ type: 'cms-update', key: selected[field].key, field, value }, location.origin);
    message('edit-message', 'Saved. The live website will show this change.');
  } catch (error) { message('edit-message', error.message, true); }
  finally { $('save').disabled = false; }
});
$('reset').addEventListener('click', async () => {
  const field = $('field').value;
  if (!selected?.[field]) return;
  try { await api('delete', { route: scopeRoute, lang: $('language').value, key: selected[field].key, field }); openPage(route); }
  catch (error) { message('edit-message', error.message, true); }
});
$('upload').addEventListener('click', async () => {
  const file = $('image-file').files[0];
  if (!file) return message('edit-message', 'Choose an image first.', true);
  const data = new FormData(); data.append('file', file); data.append('csrf', csrf);
  $('upload').disabled = true;
  try {
    const result = await api('upload', data, true);
    $('value').value = result.url;
    $('image-preview').src = result.url;
    message('edit-message', 'Uploaded. Click “Save change” to use this image.');
  } catch (error) { message('edit-message', error.message, true); }
  finally { $('upload').disabled = false; }
});
$('logout').addEventListener('click', async () => {
  try { await api('logout', {}); } finally { location.reload(); }
});
api('status').then(result => { if (result.authenticated) enter(result.csrf); }).catch(error => message('auth-message', error.message, false));
