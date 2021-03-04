// eslint-disable-next-line import/no-cycle
import rootList from './index';
import createTask from './task';

const taskSection = document.querySelector('.tasks-section');

// Helper functions
const clearTaskSection = () => {
  while (taskSection.firstChild) {
    taskSection.removeChild(taskSection.firstChild);
  }
};

// Append to DOM
const createTaskElement = (task) => {
  const taskTitle = task.getTitle();
  const taskDescription = task.getDescription();
  const taskPriority = task.getPriority();

  const taskElement = document.createElement('li');
  taskElement.classList.add('task-card');
  taskElement.innerHTML = `
        <div class="check-title">
            <img src="css/images/checkbox.svg" alt="" class="check-icon">
            <h4 class="task-title">${taskTitle}</h4>
        </div>
        <p class="task-description">${taskDescription}</p>
        <div class="task-options">
            <img src="assets/images/flag-${taskPriority}.svg" alt="" class="priority-flag">
            <img src="assets/images/edit.svg" alt="" class="task-option-btn task-edit">
            <img src="assets/images/delete.svg" alt="" class="task-option-btn task-delete">
        </div>
    `;

  return taskElement;
};

const createListElement = (list) => {
  const listTitle = list.getTitle();

  const listElement = document.createElement('li');
  listElement.classList.add('list-item');
  listElement.innerText = `${listTitle}`;

  return listElement;
};

const render = () => {
  clearTaskSection();
  // eslint-disable-next-line prefer-destructuring
  const list = Array.from(rootList.getList()[0].getList());

  list.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskSection.appendChild(taskElement);
  });
};

// UI functions
const openTaskModal = () => {
  document.querySelector('.modal-bg__task').style.display = 'flex';
};

const closeTaskModal = () => {
  document.querySelector('.modal-bg__task').style.display = 'none';
};

const openListModal = () => {
  document.querySelector('.modal-bg__list').style.display = 'flex';
};

const closeListModal = () => {
  document.querySelector('.modal-bg__list').style.display = 'none';
};

// Calling all eventListeners
// eslint-disable-next-line no-unused-vars
const eventListeners = (() => {
  const taskForm = document.querySelector('.add-task__form');
  // Open add-task modal
  document
    .querySelector('.tasks-add-btn')
    .addEventListener('click', openTaskModal);

  // Cancel add-task form
  document.querySelector('#add-task__cancel').addEventListener('click', () => {
    taskForm.reset();
    closeTaskModal();
  });

  // Confirm add-task form
  document.querySelector('#add-task__confirm').addEventListener('click', () => {
    const taskTitle = taskForm.elements[0].value;
    const taskDescription = taskForm.elements[1].value;

    // get checked priority
    let taskPriority;
    const priorities = document.querySelectorAll('.priority-input');
    if (priorities[0].checked === true) {
      taskPriority = 'high';
    } else if (priorities[2].checked === true) {
      taskPriority = 'low';
    } else {
      taskPriority = 'medium';
    }

    const newTask = createTask(taskTitle, taskDescription, taskPriority);
    const list = rootList.getList()[0];
    list.addToList(newTask);

    taskForm.reset();
    closeTaskModal();
    render();
  });

  // Open add-list modal
  document
    .querySelector('.add-list__btn')
    .addEventListener('click', openListModal);

  // Cancel add-list form
  document
    .querySelector('#add-list__cancel')
    .addEventListener('click', closeListModal);

  // Open my-list menu - mobile
  document.querySelector('.toggle-lists').addEventListener('click', () => {
    const lists = document.querySelector('.lists');
    // eslint-disable-next-line no-unused-expressions
    lists.style.display === 'none'
      ? (lists.style.display = 'flex')
      : (lists.style.display = 'none');
  });
})();

export { createTaskElement, createListElement, render };
