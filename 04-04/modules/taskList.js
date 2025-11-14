import { saveTasks } from './storage.js';

// 既存仕様：表示と削除のみ。isActive / completed は表示に反映するが、切替UIは未実装。
export function renderList(listEl, tasks) {
  listEl.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    const text = document.createElement('span');
    text.className = 'text';
    text.textContent = task.text;

    const badges = document.createElement('div');
    badges.className = 'badges';

    // isActive を視覚化
    if (task.isActive) {
      const b = document.createElement('span');
      b.className = 'badge active';
      b.textContent = 'ACTIVE';
      badges.appendChild(b);
    }

    // completed を視覚化（UI的にはバッジとクラスの両方を反映）
    if (task.completed) {
      const b = document.createElement('span');
      b.className = 'badge completed';
      b.textContent = 'DONE';
      badges.appendChild(b);
    }

    const del = document.createElement('button');
    del.textContent = '削除';
    del.addEventListener('click', (event) => {
      // 完了トグルを追加したあとも、削除クリックと競合しないようにする想定
      event.stopPropagation();
      tasks.splice(i, 1);
      saveTasks(tasks);
      renderList(listEl, tasks);
    });

    li.appendChild(text);
    li.appendChild(badges);
    li.appendChild(del);
    listEl.appendChild(li);
  });
}

export function addTask(tasks, text) {
  // 既存仕様：新規は「アクティブ」「未完了」で作成
  const newTask = { text, isActive: true, completed: false };
  return [...tasks, newTask];
}