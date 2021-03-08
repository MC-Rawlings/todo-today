// eslint-disable-next-line import/no-cycle
import rootList, { defaultList } from './index';
import createTask from './task';

const taskSection = document.querySelector('.tasks-section');

// helper functions
const clearTaskSection = () => {
  while (taskSection.firstChild) {
    taskSection.removeChild(taskSection.firstChild);
  }
};

// append to DOM
const createTaskElement = (task, index) => {
  const title = task.getTitle();
  const description = task.getDescription();
  const priority = task.getPriority();

  // main task element
  const taskElement = document.createElement('li');
  taskElement.classList.add('task-card');

  // title container
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('check-title');
  titleDiv.addEventListener('click', () => {
    handleToggleChecked(index);
  });

  const checkboxImage = document.createElement('img');
  checkboxImage.classList.add('check-icon');
  if (task.getIsChecked() === false) {
    checkboxImage.src = 'assets/images/checkbox.svg';
  } else {
    checkboxImage.src = 'assets/images/checked.svg';
    taskElement.classList.add('checked');
  }
  checkboxImage.alt = 'complete-task checkbox';

  const taskTitle = document.createElement('h4');
  taskTitle.classList.add('task-title');
  taskTitle.textContent = `${title}`;

  titleDiv.appendChild(checkboxImage);
  titleDiv.appendChild(taskTitle);

  const descriptionPara = document.createElement('p');
  descriptionPara.classList.add('task-description');
  descriptionPara.textContent = description;

  // options container
  const taskOptions = document.createElement('div');
  taskOptions.classList.add('task-options');

  const prioritySetting = document.createElement('img');
  prioritySetting.classList.add('priority-flag');
  prioritySetting.src = `assets/images/flag-${priority}.svg`;
  prioritySetting.alt = 'priority selection button';

  const editBtn = document.createElement('img');
  editBtn.classList.add('task-option-btn');
  editBtn.classList.add('task-edit');
  editBtn.src = 'assets/images/edit.svg';
  editBtn.alt = 'edit-task button';
  editBtn.addEventListener('click', () => {
    handleEditTask(index);
  });

  const deleteButton = document.createElement('btn');
  deleteButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    handleRemoveTask(index);
  });

  const deleteImage = document.createElement('img');
  deleteImage.src = 'assets/images/delete.svg';
  deleteImage.alt = 'Delete task';

  deleteButton.appendChild(deleteImage);
  taskOptions.appendChild(prioritySetting);
  taskOptions.appendChild(editBtn);
  taskOptions.appendChild(deleteButton);

  taskElement.appendChild(titleDiv);
  taskElement.appendChild(descriptionPara);
  taskElement.appendChild(taskOptions);

  return taskElement;
};

const render = () => {
  clearTaskSection();
  // eslint-disable-next-line prefer-destructuring
  const list = Array.from(rootList.getList()[0].getList());

  list.forEach((task, index) => {
    const taskElement = createTaskElement(task, index);
    taskSection.appendChild(taskElement);
  });
};

const handleRemoveTask = (index) => {
  defaultList.removeTask(index);
  render();
};

const handleToggleChecked = (index) => {
  defaultList.getList()[index].toggleCheck();
  render();
};

const createListElement = (list) => {
  const listTitle = list.getTitle();

  const listElement = document.createElement('li');
  listElement.classList.add('list-item');
  listElement.innerText = `${listTitle}`;

  return listElement;
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
