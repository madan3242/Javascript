var todo = [];

const inputTodo = document.getElementById('inputTodo');
const addTodo = document.getElementById('addTodo');
const displayTodo = document.getElementById('displayTodo');
const clearAll = document.getElementById('clearAll');

let insertTodo = () => {
    var todoItem = inputTodo.value;

    todo.push(todoItem);

    console.log(todo);

    showTodo();
}

let showTodo = () => {
    inputTodo.value = "";

    displayTodo.innerHTML = "";
    
    for (let i = 0; i < todo.length; i++) {
        displayTodo.innerHTML += `<li>${todo[i]}</li>`
    }
}

let clearElements = () => {
    todo.length = 0;

    displayTodo.innerHTML = "";
}