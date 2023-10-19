const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
};
 
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //string형식의 savedToDos를 array형태로 변환
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);   //array 내부의 item 수만큼 해당 함수를 실행
};

function Filter() {

};

