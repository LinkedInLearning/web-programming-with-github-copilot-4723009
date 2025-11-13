// 軽ユーティリティ

export function formatDate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// isActive を反転させる
export function toggleActive(isActive) {
  return !isActive;
}

// 追加の汎用関数
export function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}