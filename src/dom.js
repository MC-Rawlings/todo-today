import rootList from './index';

const taskSection = document.querySelector('.tasks-section');

// Append to DOM

const createTaskElement = (task) => {
  const taskTitle = task.getTitle();
  const taskDescription = task.getDescription();

  const taskElement = document.createElement('li');
  taskElement.classList.add('task-card');
  taskElement.innerHTML = `
        <div class="check-title">
            <img src="css/images/checkbox.svg" alt="" class="check-icon">
            <h4 class="task-title">${taskTitle}</h4>
        </div>
        <p class="task-description">${taskDescription}</p>
        <div class="task-options">
            <img src="css/images/flag-orange.svg" alt="orange flag" class="priority-flag">
            <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">
            <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">
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

const clearTaskSection = () => {
  while (taskSection.firstChild) {
    taskSection.removeChild(taskSection.firstChild);
  }
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
  // Open add-task modal
  document
    .querySelector('.tasks-add-btn')
    .addEventListener('click', openTaskModal);

  // Cancel add-task form
  document
    .querySelector('#add-task__cancel')
    .addEventListener('click', closeTaskModal);

  // Confirm add-task form
  document.querySelector('#add-task__confirm').addEventListener('click', () => {
    const form = document.querySelector('.add-task__form');

    form.reset();
    closeTaskModal();
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
