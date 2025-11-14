const KEY = 'tasks-simple';

/**
 * localStorage からタスク配列を読み込む
 * 構造：[{ text: string }]
 */
export function loadTasks() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data
      .filter((t) => typeof t?.text === 'string')
      .map((t) => ({ text: t.text }));
  } catch {
    return [];
  }
}

/**
 * タスク配列を localStorage に保存する
 * @param {{ text: string }[]} tasks
 */
export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}