/* eslint-disable import/no-cycle */
import { render, renderLists } from './dom';
import createList from './list';
import createTask from './task';
import { mockTasks } from './mockData';

// load default examples
const rootList = createList('Root');
export default rootList;
const defaultList = createList('Home');

rootList.addToList(defaultList);

mockTasks.forEach(({ title, description, priority }) => {
  const newTask = createTask(title, description, priority);
  defaultList.addToList(newTask);
});

if (localStorage.getItem('rootList') === null) {
  localStorage.setItem('rootList', JSON.stringify(rootList.getList()));
} else {
  console.log(JSON.parse(localStorage.getItem('rootList')));
  const savedList = JSON.parse(localStorage.getItem('rootList'));
  console.log(savedList);
}

render();
renderLists();

export { defaultList };
