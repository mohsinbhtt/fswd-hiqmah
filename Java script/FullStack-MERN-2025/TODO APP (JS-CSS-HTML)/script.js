let tasks = [];
let focusList = [];
let finishedList = [];

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const focusListEl = document.getElementById('focusList');
const finishedListEl = document.getElementById('finishedList');
const taskListContainer = document.getElementById(
	'taskListContainer'
);
const focusListContainer = document.getElementById(
	'focusListContainer'
);
const finishedListContainer = document.getElementById(
	'finishedListContainer'
);

function init() {
	addBtn.addEventListener('click', addTask);

	taskInput.focus();
	updateTaskList();
	updateFocusList();
	updateFinishedList();
}

function addTask() {
	const text = taskInput.value.trim();
	if (!text) return;

	const newTask = {
		id: Date.now(),
		text: text,
		currentDateTime: new Date().toLocaleString(),
	};

	tasks.push(newTask);
	taskInput.value = '';
	taskInput.focus();
	updateTaskList();
}

function deleteTask(id) {
	tasks = tasks.filter((task) => task.id !== id);
	focusList = focusList.filter((item) => item.id !== id);
	finishedList = finishedList.filter((item) => item.id !== id);

	updateTaskList();
	updateFocusList();
	updateFinishedList();
}

function addToFocusList(task) {
	if (focusList.some((item) => item.id === task.id)) return;

	const focusTask = {
		...task,
		currentDateTime: new Date().toLocaleString(),
	};

	focusList.push(focusTask);
	updateFocusList();
}

function addToFinishedList(item) {
	if (
		finishedList.some((finishedItem) => finishedItem.id === item.id)
	)
		return;

	const finishedTask = {
		...item,
		currentDateTime: new Date().toLocaleString(),
	};

	finishedList.push(finishedTask);

	tasks = tasks.filter((task) => task.id !== item.id);
	focusList = focusList.filter(
		(focusItem) => focusItem.id !== item.id
	);

	updateTaskList();
	updateFocusList();
	updateFinishedList();
}

function updateTaskList() {
	if (tasks.length === 0) {
		taskList.innerHTML = '<div class="Enter Task!</div>';
		taskListContainer.style.display = 'none';
		return;
	}

	taskListContainer.style.display = 'block';
	taskList.innerHTML = tasks
		.map(
			(task) => `
        <li class="task-item">
            <div class="task-content">
                <div class="task-text">${task.text}</div>
                <div class="task-time">${task.currentDateTime}</div>
            </div>
            <div class="task-actions">
                <button class="btn btn-focus" onclick="moveToFocusList(${task.id})">
                     Focus
                </button>
                <button class="btn btn-delete" onclick="removeTask(${task.id})">
                     Delete
                </button>
            </div>
        </li>
    `
		)
		.join('');
}

function updateFocusList() {
	if (focusList.length === 0) {
		focusListEl.innerHTML =
			'<div class="empty-state">No tasks in focus. Add one from the task list!</div>';
		focusListContainer.style.display = 'none';
		return;
	}

	focusListContainer.style.display = 'block';
	focusListEl.innerHTML = focusList
		.map(
			(item) => `
        <li class="task-item">
            <div class="task-content">
                <div class="task-text">${item.text}</div>
                <div class="task-time">${item.currentDateTime}</div>
            </div>
            <div class="task-actions">
                <button class="btn btn-finished" onclick="markAsFinished(${item.id})">
                     Finished
                </button>
            </div>
        </li>
    `
		)
		.join('');
}

function updateFinishedList() {
	if (finishedList.length === 0) {
		finishedListEl.innerHTML =
			'<div class="empty-state">No finished tasks yet.</div>';
		finishedListContainer.style.display = 'none';
		return;
	}

	finishedListContainer.style.display = 'block';
	finishedListEl.innerHTML = finishedList
		.map(
			(item) => `
        <li class="task-item finished-item">
            <div class="task-content">
                <div class="task-text">${item.text}</div>
                <div class="task-time">${item.currentDateTime}</div>
            </div>
            <div class="task-actions">
                <span class="finished-check">
                    Completed
                </span>
            </div>
        </li>
    `
		)
		.join('');
}

window.moveToFocusList = function (taskId) {
	const task = tasks.find((t) => t.id === taskId);
	if (task) addToFocusList(task);
};

window.markAsFinished = function (taskId) {
	const task = focusList.find((t) => t.id === taskId);
	if (task) addToFinishedList(task);
};

window.removeTask = deleteTask;

document.addEventListener('DOMContentLoaded', init);
