// Selectors

const _todoInput = document.querySelector(".todo-input");
const _todoButton = document.querySelector(".todo-button");
const _todoList = document.querySelector(".todo-list");


// Event Listeners

_todoButton.addEventListener("click", addTodo);


// Functions

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo div
    const _todoDiv = document.createElement("div")
    _todoDiv.classList.add("todo");
    // Create li
    const _newTodo = document.createElement("li");
    _newTodo.innerText = "hey";
    _newTodo.classList.add("todo-item");
    _todoDiv.appendChild(_newTodo);
    //Check mark button
    const _completeButton = document.createElement("button");
    _completeButton.innerText = `<i class="fas fa-check"></i>`;
    _completeButton.classList.add("complete-btn");
    _todoDiv.appendChild(_completeButton);
    //Check trash button
    const _trashButton = document.createElement("button");
    _trashButton.innerText = `<i class="fas fa-trash"></i>`;
    _trashButton.classList.add("complete-btn");
    _todoDiv.appendChild(_trashButton);
}