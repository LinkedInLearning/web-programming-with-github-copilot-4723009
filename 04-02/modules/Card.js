import { el, btn } from './domkit.js';

// ダミーアイテム生成
export function sampleItems() {
  return [
    { id: 1, title: 'Getting Started', description: 'まずは雛形を確認', isActive: true },
    { id: 2, title: 'Refactor', description: '命名と関数分割を検討', isActive: false },
    { id: 3, title: 'Automate', description: '繰り返し作業を自動化', isActive: true },
    { id: 4, title: 'Docs', description: 'JSDoc を付与', isActive: false },
    { id: 5, title: 'Test', description: '簡易チェックを追加', isActive: false },
    { id: 6, title: 'Polish', description: 'スタイル微調整', isActive: true }
  ];
}

// カード一覧を描画する
export function createCardGrid(items) {
  const grid = el('div', { class: 'grid' });

  items.forEach((item) => {
    const card = el('div', { class: 'card' });
    const title = el('h3', {}, item.title);
    const desc = el('p', {}, item.description);
    const meta = el('p', { class: 'meta', 'data-created-at': Date.now().toString() }, 'created: (loading)');

    if (item.isActive) {
      const badge = el('span', { class: 'button primary' }, 'ACTIVE');
      card.appendChild(badge);
    }

    const toggle = btn('状態を切替', () => {
      item.isActive = !item.isActive;
      badgeToggle(card, item.isActive);
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    card.appendChild(toggle);
    grid.appendChild(card);
  });

  return grid;
}

function badgeToggle(cardEl, isActive) {
  const exists = cardEl.querySelector('.button.primary');
  if (isActive && !exists) {
    const badge = el('span', { class: 'button primary' }, 'ACTIVE');
    cardEl.insertBefore(badge, cardEl.firstChild);
  } else if (!isActive && exists) {
    exists.remove();
  }
}