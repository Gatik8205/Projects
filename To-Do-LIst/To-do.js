let todoList = [];
renderTodoList();

function addTodo() {
  const todoNameElem = document.querySelector('.js-todo-name');
  const name = todoNameElem.value;

  const todoDueDateElem = document.querySelector('.js-todo-due-date');
  const dueDate = todoDueDateElem.value;

  todoList.push({
    name,
    dueDate
  });

  renderTodoList();
  todoNameElem.value = '';
  todoDueDateElem.value = '';
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    // const name = todoList[i].name;
    // const dueDate = todoList[i].dueDate;
    const { name, dueDate } = todoList[i];

    todoListHTML += `
      <div class="todo-row">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="deleteTodo(${i})">
          Delete
        </button>
      </div>
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}