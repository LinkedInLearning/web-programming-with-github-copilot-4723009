import { renderList, addTask } from './modules/taskList.js';
import { loadTasks, saveTasks } from './modules/storage.js';

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = loadTasks();

if (tasks.length === 0) {
  tasks = [
    { text: '雛形の確認', isActive: true,  completed: false },
    { text: '削除ボタンの挙動確認', isActive: false, completed: false },
    { text: '保存処理の確認', isActive: false, completed: true }
  ];
  saveTasks(tasks);
}

renderList(taskList, tasks);

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  tasks = addTask(tasks, text);
  saveTasks(tasks);
  renderList(taskList, tasks);
  taskInput.value = '';
});
