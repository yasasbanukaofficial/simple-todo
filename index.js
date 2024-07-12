const taskInputElement = document.querySelector('.js-task-input');
const addButtonElement = document.querySelector('.js-add-button');
const taskDisplayContainer = document.querySelector('.js-taskContainer');
const todoList = [];

function todoConnect() {
    const task = taskInputElement.value;
    todoList.push(task);
    if (taskInputElement.value === '') {
        todoError()
    } else {
        todoDisplay()
    }
    taskInputElement.value = '';
}

function todoDisplay() {
    let todoListHtml = '';
    todoList.forEach((taskObject, index) => {
        const task = taskObject;
        const html = `
        <div class='resultContainer'>
        <div class='taskDisplay'>${task}</div>
        <button class='deleteBtn' onclick="
        todoList.splice(${index}, 1);
        todoDisplay();
        ">x</button>
        </div>
        `;
        todoListHtml += html;
    })
    document.querySelector('.js-taskContainer')
        .innerHTML = todoListHtml;
}

function todoError() {
    document.querySelector('.js-taskContainer')
        .innerHTML = '<p class="warning">Please enter a task</p>';
}