import { renderHeader } from './modules/Header.js';
import { renderFooter } from './modules/Footer.js';
import { createCardGrid, sampleItems } from './modules/Card.js';
import { formatDate, toggleActive } from './modules/utils.js';

const headerEl = document.getElementById('site-header');
const footerEl = document.getElementById('site-footer');
const appEl = document.getElementById('app');

const navItems = [
  { label: 'Home', href: '#home', isActive: true },
  { label: 'Docs', href: '#docs', isActive: false },
  { label: 'About', href: '#about', isActive: false }
];

renderHeader(headerEl, { title: 'Agents Demo', navItems });

// カード用のダミーデータ
const items = sampleItems().map((it, index) => ({
  ...it,
  isActive: index % 2 === 0,
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (index + 1))
}));

const grid = createCardGrid(items);
appEl.appendChild(grid);

// どこかで isActive をトグルして再描画するフロー
setTimeout(() => {
  // 1枚目をON/OFFしてみる
  items[0].isActive = toggleActive(items[0].isActive);
  // 2枚目をONに
  items[1].isActive = true;

  // 日付の表示だけ更新してみる
  document.querySelectorAll('[data-created-at]').forEach((el) => {
    const ts = Number(el.getAttribute('data-created-at'));
    el.textContent = `created: ${formatDate(new Date(ts))}`;
  });
}, 1500);

renderFooter(footerEl, { year: new Date().getFullYear(), isActive: false });