/* eslint-disable import/no-cycle */
import { render, renderLists } from './dom';
import createList from './list';
import createTask from './task';
import { mockTasks } from './mockData';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';

// load default examples
const rootList = createList('Root');
export default rootList;
const defaultList = createList('Home');

rootList.addToList(defaultList);

mockTasks.forEach(({ title, description, priority }) => {
  const newTask = createTask(title, description, priority);
  defaultList.addToList(newTask);
});

if (localStorage.getItem('rootList') !== null) {
}

saveToLocalStorage();
loadFromLocalStorage();

render();
renderLists();

export { defaultList };
