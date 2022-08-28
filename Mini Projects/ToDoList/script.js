var todo = [];

const inputTodo = document.getElementById('inputTodo');
const addTodo = document.getElementById('addTodo');
const displayTodo = document.getElementById('displayTodo');
const clearAll = document.getElementById('clearAll');


function insertTodo(){
    var todoItem = inputTodo.value;

    todo.push(todoItem);

    console.log(todo);

    showTodo();
}

function showTodo(){
    inputTodo.value = "";

    displayTodo.innerHTML = "";
    
    for (let i = 0; i < todo.length; i++) {
        displayTodo.innerHTML += `<li>${todo[i]}</li>`
    }
}

function clearElements(){
    todo.length = 0;

    displayTodo.innerHTML = "";
}