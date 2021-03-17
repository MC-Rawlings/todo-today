import { render, renderLists } from './dom';
import rootList from './index';
import createList from './list';
import createTask from './task';

const saveToLocalStorage = () => {
  const allLists = rootList.getList();
  const newRootList = [];

  // loop through all the lists in root
  allLists.forEach((list) => {
    const tasks = list.getList();
    const listData = {
      title: list.getTitle(),
      list: [],
    };

    // loop through all tasks in each list
    tasks.forEach((task) => {
      const taskData = {
        title: task.getTitle(),
        description: task.getDescription(),
        priority: task.getPriority(),
        isChecked: task.getIsChecked(),
      };

      listData.list.push(taskData);
    });

    newRootList.push(listData);
  });

  localStorage.setItem('rootList', JSON.stringify(newRootList));
};

const loadFromLocalStorage = () => {
  const lists = JSON.parse(localStorage.getItem('rootList'));
  const newRoot = [];
  console.log(lists);

  lists.forEach((list) => {
    const listTitle = list.title;
    console.log(listTitle);
    const newList = createList(listTitle);

    list.list.forEach((task) => {
      const { title, priority, description, isChecked } = task;
      const newTask = createTask(title, description, priority);
      if (newTask.getIsChecked() !== task.isChecked) {
        newTask.toggleCheck();
      }
      newList.addToList(newTask);
    });
    newRoot.push(newList);
  });
  rootList.updateList(newRoot);
  render();
  renderLists();
};

export { saveToLocalStorage, loadFromLocalStorage };
