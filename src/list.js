/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
// import { createTask } from './task';
// eslint-disable-next-line import/no-cycle
import rootList from './index';

const createList = (title) => {
  const list = [];

  // Getters
  const getTitle = () => title;
  const getList = () => list;

  // Setters
  // eslint-disable-next-line no-param-reassign
  const setTitle = (newTitle) => (title = newTitle);

  // Methods
  const addToList = (task) => list.push(task);

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
    addToList,
    removeTask,
  };
};

export default createList;
