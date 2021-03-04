/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
// import { createTask } from './task';
// eslint-disable-next-line import/no-cycle
import { render } from './dom';
import rootList from './index';

const createList = (title) => {
  let list = [];

  // Getters
  const getTitle = () => title;
  const getList = () => list;

  // Setters
  // eslint-disable-next-line no-param-reassign
  const setTitle = (newTitle) => (title = newTitle);

  // Methods
  const addToList = (task) => list.push(task);

  const removeTask = (taskTitle) => {
    list = list.filter((task) => task.getTitle() !== taskTitle);

    render();
  };

  return {
    getTitle,
    getList,
    setTitle,
    addToList,
    removeTask,
  };
};

export default createList;
