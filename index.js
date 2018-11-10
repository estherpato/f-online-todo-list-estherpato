const dateDayNumber = document.querySelector('.date-day-number');
const dateDay = document.querySelector('.date-day');
const dateMonthYear = document.querySelector('.date-month-year');
const addButton = document.querySelector('.add-btn');
const addTaskButton = document.querySelector('.add-task-btn');
const taskInput = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');
const formularyContainer = document.querySelector('.add-task-container');
const clearButton = document.querySelector('.clear-icon');

let list = '';
let newTask;
const taskArray = [];
const checkedArray = [];
const savedTasks = JSON.parse(localStorage.getItem('tasks'));

// generar un new Date y guardar los valores en constantes
function getDate() {
    const date = new Date();
    const dayNumber = date.getDate();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    showDate(day, dayNumber, month, year);
}

// imprimir los datos de getDate en pantalla
function showDate(day, dayNumber, month, year) {
    const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    dateDayNumber.innerText = dayNumber;
    dateDay.innerText = weekDays[day];
    dateMonthYear.innerText = months[month] + ', ' + year;
}

// mostrar las tareas guardadas en LocalStorage al cargar la pag
function showTaskList() {
    if (savedTasks !== null) {
        savedTasks.map(task => {
            list += `
                <label class="item-container">${task}
                    <input type="checkbox" class="list-item"/>
                    <span class="checkmark"></span>
                </label>`;
        });
        todoList.innerHTML = list;
        setListener();
    }
}

// controlar lo que sucede al añadir una nueva tarea
function writeTasks(newTask) {
    if (savedTasks === null) {
        taskArray.unshift(newTask);
        taskArray.map(task => {
            list += `
                <label class="item-container">${task}
                    <input type="checkbox" class="list-item"/>
                    <span class="checkmark"></span>
                </label>`;
        });
        todoList.innerHTML = list;
        setListener();
        setLocalStorage(taskArray);
    } else {
        savedTasks.unshift(newTask);
        savedTasks.map(task => {
            list += `
                <label class="item-container">${task}
                    <input type="checkbox" class="list-item"/>
                    <span class="checkmark"></span>
                </label>`;
        });
        todoList.innerHTML = list;
        setListener();
        setLocalStorage(savedTasks);
    }
}

function setLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function setListener() {
    const boxes = document.querySelectorAll("input[type='checkbox']");
    boxes.forEach(item => item.addEventListener('change', checkInputHandler));
}

function openFormulary() {
    formularyContainer.classList.remove('hidden');
    addButton.classList.add('hidden');
    taskInput.value = '';
}

function addNewTask(e) {
    e.preventDefault();
    newTask = taskInput.value;
    if (newTask !== '') {
        list = '';
        writeTasks(newTask);
        formularyContainer.classList.add('hidden');
        addButton.classList.remove('hidden');
    } else {
        alert('Por favor, introduce una tarea');
    }
}

function closeFormulary(e) {
    if (e.keyCode === 27) {
        formularyContainer.classList.add('hidden');
        addButton.classList.remove('hidden');
    }
}

function clearList() {
    localStorage.removeItem('tasks');
    todoList.innerHTML = '';
}

function checkInputHandler() {
    const parentLabel = this.parentElement;
    if (this.checked) {
        parentLabel.classList.add('item-container-selected');
    } else {
        parentLabel.classList.remove('item-container-selected');
    }
}

getDate();
showTaskList();

addButton.addEventListener('click', openFormulary);
addTaskButton.addEventListener('click', addNewTask);
window.addEventListener('keydown', closeFormulary);
clearButton.addEventListener('click', clearList)