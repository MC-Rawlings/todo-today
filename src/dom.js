import createTask from './task';
// eslint-disable-next-line import/no-cycle
import { defaultList } from './index';

// Append to DOM
const appendTask = (task) => {
  const taskTitle = task.getTitle();
  const taskDescription = task.getDescription();

  const toAppend = document.createElement('li');
  toAppend.classList.add('task-card');
  toAppend.innerHTML = `
        <div class="check-title">
            <img src="css/images/checkbox.svg" alt="" class="check-icon">
            <h4 class="task-title">${taskTitle}</h4>
        </div>
        <p class="task-description">${taskDescription}</p>
        <div class="task-options">
            <img src="css/images/flag-grey.svg" alt="" class="priority-flag">
            <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">
            <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">
        </div>
    `;

  document.querySelector('.tasks-section').appendChild(toAppend);
};

const appendList = (list) => {
  const listTitle = list.getTitle();

  const toAppend = document.createElement('li');
  toAppend.classList.add('list-item');
  toAppend.innerText = `${listTitle}`;

  document.querySelector('.lists').appendChild(toAppend);
};

// UI functions
const openModal = () => {
  document.querySelector('.modal-bg').style.display = 'flex';
};

const closeModal = () => {
  document.querySelector('.modal-bg').style.display = 'none';
};

// Calling all eventListeners
// eslint-disable-next-line no-unused-vars
const eventListeners = (() => {
  // Open add-task modal
  document.querySelector('.tasks-add-btn').addEventListener('click', openModal);

  // Cancel add-task form
  document
    .querySelector('#add-task__cancel')
    .addEventListener('click', closeModal);

  // Confirm add-task form
  document.querySelector('#add-task__confirm').addEventListener('click', () => {
    const form = document.querySelector('form');
    const newTask = createTask(form.elements[0].value, form.elements[1].value);
    defaultList.addTask(newTask);
    appendTask(newTask);

    form.reset();
    closeModal();
  });

  // Open my-list menu - mobile
  document.querySelector('.toggle-lists').addEventListener('click', () => {
    let lists = document.querySelector('.lists');
    lists.style.display === 'none'
      ? (lists.style.display = 'flex')
      : (lists.style.display = 'none');
  });
})();

export { appendTask, appendList };
