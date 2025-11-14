// フッターを描画する
export function renderFooter(root, { year, isActive }) {
  const el = document.createElement('div');
  el.innerHTML = `<p class="meta">© ${year} Agents Demo</p>`;

  if (isActive) {
    el.querySelector('.meta').style.fontWeight = '700';
  }

  root.innerHTML = '';
  root.appendChild(el);
}