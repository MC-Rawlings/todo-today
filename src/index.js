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
const testList1 = createList('Test');
rootList.addToList(testList1);

mockTasks.forEach(({ title, description, priority }) => {
  const newTask = createTask(title, description, priority);
  defaultList.addToList(newTask);
});

render();
renderLists();

export { defaultList };
