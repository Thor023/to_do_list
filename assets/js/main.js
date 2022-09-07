const tasks = [
    {
        id: 1,
        name: "Llevar a los niños al colegio",
        status: false
    },

    {
        id: 2,
        name: "Terminar desafio",
        status: false
    },
    {
        id: 3,
        name: "Ejercitar",
        status: false
    }
];

const addTask = document.getElementById('addBtn');
const inputTask = document.getElementById('newTask');
const listTask = document.getElementById('tableTasks');
const totalTask = document.getElementById('totalTask');
const doneTask = document.getElementById('doneTask');
let taskId = tasks.length + 1;
let doneCountTask = 0;

const renderTasks = () => {
    let html = "";
//Template Tasks
    for (let task of tasks) {
        inputTask.value = "";
        html += `
        <tr>
        <td>${task.id}</td> 
        <td class="task-line-through">${task.name} </td>
        <td><input type="checkbox" class="checkbox-btn" onclick="checkbox(${task.id})"> </td>
        <td><button class="del-btn"
        onclick="deleteTask(${task.id})">X</button> </td>
        </tr>`;
    }
    listTask.innerHTML = html;
    totalTask.innerHTML = `${tasks.length}`;
};
//Evento agregar
addTask.addEventListener('click', () => {
    const newTask = { id: taskId, name: inputTask.value, status: false }
    tasks.push(newTask)
    taskId++;

    if (!inputTask.value) {
        alert("Ingrese una tarea");
        tasks.pop();
    } else {
        renderTasks();
    }
});
//Borrar
const deleteTask = (id) => {
    const index = tasks.findIndex((ele) => ele.id === id);
    tasks.splice(index, 1);
    renderTasks();
};
//Check
const checkbox = (id) => {
    const indice = tasks.findIndex((e) => e.id === id)
    if (tasks[indice].status === false) {
        tasks[indice].status = true;
        doneCountTask += 1;
    } else {
        tasks[indice].status = false;
        doneCountTask -= 1;
    }
    doneTask.innerHTML = `${doneCountTask}`
};

window.onload = () => {
    renderTasks();
};
