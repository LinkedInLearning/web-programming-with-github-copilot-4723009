import { renderList, addTask, removeTask } from './modules/taskList.js';
import { loadTasks, saveTasks } from './modules/storage.js';

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 4-5 の前提：タスクは「テキストのみ」を持つシンプルな構造
// { text: string } の配列として扱う
let tasks = loadTasks();

// onDelete ハンドラを関数として定義
function handleDelete(index) {
  tasks = removeTask(tasks, index);
  saveTasks(tasks);
  renderList(taskList, tasks, { onDelete: handleDelete });
}

renderList(taskList, tasks, { onDelete: handleDelete });

// フォーム送信でタスクを追加
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  tasks = addTask(tasks, text);
  saveTasks(tasks);
  renderList(taskList, tasks, { onDelete: handleDelete });

  taskInput.value = '';
});