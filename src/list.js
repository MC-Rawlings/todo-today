/* eslint-disable no-return-assign */
// import { createTask } from './task';
import { rootList } from './index';

const createList = (title) => {
  const list = [];
  let isActive = false;

  // Getters
  const getTitle = () => title;
  const getList = () => list;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const toggleIsActive = () => {
    isActive === false ? (isActive = true) : (isActive = false);
  };

  // Methods
  const addTask = (task) => list.push(task);

  const removeTask = (taskTitle) => {
    const index = list.findIndexconsole.log(rootList.getList()[0].getTitle());
    (task) => {
      task.getTitle === taskTitle;
    };

    list.splice(index, 1);
  };

  return {
    getTitle,
    getList,
    setTitle,
    addTask,
    removeTask,
    toggleIsActive,
  };
};

export { createList };
