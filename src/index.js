/* eslint-disable import/no-cycle */
import { render, renderLists } from './dom';
import createList from './list';
import createTask from './task';
import { mockTasks } from './mockData';

// load default examples
const rootList = createList('Root');
export default rootList;


if (localStorage.getItem('root-list') === null) {
  const defaultList = createList('Home');
  rootList.addToList(defaultList);
  mockTasks.forEach(({ title, description, priority }) => {
    const newTask = createTask(title, description, priority);
    defaultList.addToList(newTask);
  });

}
//


render();
renderLists();

export { defaultList };
