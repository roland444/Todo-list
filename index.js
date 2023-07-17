// Selectors

const _todoInput = document.querySelector(".todo-input");
const _todoButton = document.querySelector(".todo-button");
const _todoList = document.querySelector(".todo-list");


// Event Listeners

_todoButton.addEventListener("click", addTodo);

_todoList.addEventListener("click", deleteCheck);


// Functions

function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo div
    const _todoDiv = document.createElement("div")
    _todoDiv.classList.add("todo");
    // Create li
    const _newTodo = document.createElement("li");
    _newTodo.innerText = _todoInput.value;
    _newTodo.classList.add("todo-item");
    _todoDiv.appendChild(_newTodo);
    //Check mark button
    const _completeButton = document.createElement("button");
    _completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    _completeButton.classList.add("complete-btn");
    _todoDiv.appendChild(_completeButton);
    //Check trash button
    const _trashButton = document.createElement("button");
    _trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    _trashButton.classList.add("trash-btn");
    _todoDiv.appendChild(_trashButton);
    //Apend to list
    _todoList.appendChild(_todoDiv);
    //Clear Todo INPUT VALUE
    _todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        
        // Animation

        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
        
    }

    // Check mark

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle("completed");
    }
}