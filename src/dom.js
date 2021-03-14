// eslint-disable-next-line import/no-cycle
import rootList, { defaultList } from './index';
import createTask from './task';
import createList from './list';

const taskSection = document.querySelector('.tasks-section');
const listSection = document.querySelector('.lists');

// helper functions
const clearTaskSection = () => {
  while (taskSection.firstChild) {
    taskSection.removeChild(taskSection.firstChild);
  }
};

const clearListSection = () => {
  while (listSection.firstChild) {
    listSection.removeChild(listSection.firstChild);
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

const createListElement = (list, index) => {
  const title = list.getTitle();
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.textContent = `${title}`;
  listItem.addEventListener('click', () => {
    handleRenderList(list);
  });

  return listItem;
};

const renderLists = () => {
  clearListSection();
  const rootListArr = Array.from(rootList.getList());

  rootListArr.forEach((list, index) => {
    const listElement = createListElement(list, index);
    listSection.appendChild(listElement);
  });

  const addListBtn = document.createElement('div');
  addListBtn.classList.add('add-list__btn');
  addListBtn.textContent = 'ADD LIST';
  addListBtn.addEventListener('click', openListModal);

  listSection.appendChild(addListBtn);
};

const render = (list = rootList.getList()[0]) => {
  clearTaskSection();
  // eslint-disable-next-line prefer-destructuring
  const listArr = Array.from(list.getList());

  listArr.forEach((task, index) => {
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

const handleEditTask = (index) => {
  const editTaskForm = document.querySelector('.edit-task__form');
  const title = defaultList.getList()[index].getTitle();
  const description = defaultList.getList()[index].getDescription();
  const priority = defaultList.getList()[index].getPriority();

  // open form with relative task info
  editTaskForm.elements[0].value = title;
  editTaskForm.elements[1].value = description;
  document.getElementById(`edit-${priority}`).checked = true;
  openEditModal();

  // replace task with new info and render
  document.getElementById('edit-task__confirm').addEventListener(
    'click',
    () => {
      console.log(editTaskForm.elements[0].value);
      defaultList.getList()[index].setTitle(editTaskForm.elements[0].value);
      defaultList
        .getList()
        [index].setDescription(editTaskForm.elements[1].value);
      console.log(editTaskForm.elements[1].value);
      defaultList.getList()[index].setPriority(getPriorityEdit());
      render();
      closeEditModal();
    },
    { once: true }
  );
};

const handleRenderList = (list) => {
  document.querySelector(
    '.tasks-section__title'
  ).textContent = `${list.getTitle()}`;
  render(list);
};

// UI functions
const openEditModal = () => {
  document.querySelector('.modal-bg__task-edit').style.display = 'flex';
};

const closeEditModal = () => {
  document.querySelector('.modal-bg__task-edit').style.display = 'none';
};

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
    const taskPriority = getPriority();

    // create task and add to list
    const newTask = createTask(taskTitle, taskDescription, taskPriority);
    const list = rootList.getList()[0];
    list.addToList(newTask);

    // reset form and render
    taskForm.reset();
    closeTaskModal();
    render();
  });

  // Confirm add-list form
  document.querySelector('#add-list__confirm').addEventListener('click', () => {
    const listForm = document.querySelector('.add-list__form');
    const newList = createList(listForm.elements[0].value);

    rootList.addToList(newList);
    listForm.reset();
    closeListModal();
    renderLists();
  });

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

  document.querySelector('#edit-task__cancel').addEventListener('click', () => {
    closeEditModal();
  });
})();

const getPriority = () => {
  const priorities = document.querySelectorAll('.priority-input');
  if (priorities[0].checked === true) {
    return 'high';
  }
  if (priorities[2].checked === true) {
    return 'low';
  }
  return 'medium';
};

const getPriorityEdit = () => {
  const priorities = document.querySelectorAll('.priority-input-edit');
  if (priorities[0].checked === true) {
    return 'high';
  }
  if (priorities[2].checked === true) {
    return 'low';
  }
  return 'medium';
};

export { createTaskElement, createListElement, render, renderLists };
