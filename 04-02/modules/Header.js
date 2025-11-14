// ナビゲーションヘッダーを描画する
export function renderHeader(root, { title, navItems }) {
  const nav = document.createElement('nav');
  nav.className = 'nav';

  const h1 = document.createElement('h1');
  h1.className = 'site-title';
  h1.textContent = title;

  nav.appendChild(h1);

  navItems.forEach((item) => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    if (item.isActive) a.classList.add('active');
    nav.appendChild(a);
  });

  root.innerHTML = '';
  root.appendChild(nav);
}