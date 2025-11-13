// 小さなDOMユーティリティ

export function el(tag, attrs = {}, text = '') {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
  if (text) node.textContent = text;
  return node;
}

export function btn(label, onClick) {
  const b = el('button', { class: 'button' }, label);
  b.addEventListener('click', onClick);
  return b;
}