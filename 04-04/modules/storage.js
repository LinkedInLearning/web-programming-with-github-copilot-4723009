const KEY = 'tasks';

// 既存仕様：isActive / completed を含むオブジェクト配列を保存・読込
export function loadTasks() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : [];
    // フィールド欠落時の後方互換
    return Array.isArray(data)
      ? data.map((t) => ({
          text: t.text ?? '',
          isActive: typeof t.isActive === 'boolean' ? t.isActive : true,
          completed: typeof t.completed === 'boolean' ? t.completed : false
        }))
      : [];
  } catch {
    return [];
  }
}

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}