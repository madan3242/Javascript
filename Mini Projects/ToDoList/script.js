var todo = [];

const inputTodo = document.getElementById('inputTodo');
const addTodo = document.getElementById('addTodo');
const displayTodo = document.getElementById('displayTodo');

function insertTodo(){
    var todoItem = inputTodo.value;

    todo.push(todoItem);

    console.log(todo);

    inputTodo.value = "";

    showTodo();

}

function showTodo(){
    
    for (let i = 0; i < todo.length; i++) {
        displayTodo.innerHTML += `<li>
                                    ${todo[i]}
                                </li>`
    }
}
