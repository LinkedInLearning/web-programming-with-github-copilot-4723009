const tasks = [];

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text) {
    addTask(text);
    taskInput.value = '';
  }
});

function addTask(task) {
  tasks.push(task);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((t) => {
    const li = document.createElement('li');
    li.textContent = t;
    taskList.appendChild(li);
  });
}