const dateDayNumber = document.querySelector('.date-day-number');
const dateDay = document.querySelector('.date-day');
const dateMonthYear = document.querySelector('.date-month-year');
const addButton = document.querySelector('.add-btn');
const addTaskButton = document.querySelector('.add-task-btn');
const taskInput = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');
const formularyContainer = document.querySelector('.add-task-container');

let newTask;

function getDate() {
    const date = new Date();
    const dayNumber = date.getDate();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    showDate(day, dayNumber, month, year);
}

function showDate(day, dayNumber, month, year) {
    dateDayNumber.innerText = dayNumber;

    if (day === 1) {
        dateDay.innerText = 'Lunes';
    } else if (day === 2) {
        dateDay.innerText = 'Martes';
    } else if (day === 3) {
        dateDay.innerText = 'Miércoles';
    } else if (day === 4) {
        dateDay.innerText = 'Jueves';
    } else if (day === 5) {
        dateDay.innerText = 'Viernes';
    } else if (day === 6) {
        dateDay.innerText = 'Sábado';
    } else if (day === 7) {
        dateDay.innerText = 'Domingo';
    }

    if (month === 1) {
        dateMonthYear.innerText = 'Enero' + ', ' + year
    } else if (month === 2) {
        dateMonthYear.innerText = 'Febrero' + ', ' + year
    } else if (month === 3) {
        dateMonthYear.innerText = 'Marzo' + ', ' + year
    } else if (month === 4) {
        dateMonthYear.innerText = 'Abril' + ', ' + year
    } else if (month === 5) {
        dateMonthYear.innerText = 'Mayo' + ', ' + year
    } else if (month === 6) {
        dateMonthYear.innerText = 'Junio' + ', ' + year
    } else if (month === 7) {
        dateMonthYear.innerText = 'Julio' + ', ' + year
    } else if (month === 8) {
        dateMonthYear.innerText = 'Agosto' + ', ' + year
    } else if (month === 9) {
        dateMonthYear.innerText = 'Septiembre' + ', ' + year
    } else if (month === 10) {
        dateMonthYear.innerText = 'Octubre' + ', ' + year
    } else if (month === 11) {
        dateMonthYear.innerText = 'Noviembre' + ', ' + year
    } else if (month === 12) {
        dateMonthYear.innerText = 'Diciembre' + ', ' + year
    }
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
        todoList.innerHTML = `
        <label class="item-container">${newTask}
            <input type="checkbox" class="list-item">
            <span class="checkmark"></span>
        </label>`
            + todoList.innerHTML;
        formularyContainer.classList.add('hidden');
        addButton.classList.remove('hidden');
    } else {
        alert('Por favor, introduce una tarea');
    }
}

getDate();

addButton.addEventListener('click', openFormulary);
addTaskButton.addEventListener('click', addNewTask);
