// タスクの表示と、追加・削除に関するロジック

/**
 * タスクリストを描画する
 * @param {HTMLElement} listEl - <ul> 要素
 * @param {{ text: string }[]} tasks - タスク配列
 * @param {{ onDelete: (index: number) => void }} handlers
 */
export function renderList(listEl, tasks, { onDelete }) {
  listEl.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-delete';
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      onDelete(index);
    });

    li.appendChild(textSpan);
    li.appendChild(deleteButton);
    listEl.appendChild(li);
  });
}

/**
 * タスクを追加する
 * @param {{ text: string }[]} tasks
 * @param {string} text
 * @returns {{ text: string }[]}
 */
export function addTask(tasks, text) {
  const newTask = { text };
  return [...tasks, newTask];
}

/**
 * 指定 index のタスクを削除する
 * @param {{ text: string }[]} tasks
 * @param {number} index
 * @returns {{ text: string }[]}
 */
export function removeTask(tasks, index) {
  return tasks.filter((_, i) => i !== index);
}