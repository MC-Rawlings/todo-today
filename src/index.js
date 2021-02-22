/* eslint-disable import/no-cycle */
import { appendTask, appendList } from './dom';
import createList from './list';
import createTask from './task';

// load default examples
const rootList = createList('Root');
const defaultList = createList('Home');
defaultList.toggleIsActive();
const defaultTask = createTask('Example', 'Example of a to-do item', 'medium');

defaultList.addToList(defaultTask);
rootList.addToList(defaultList);

appendTask(defaultTask);
appendList(defaultList);

console.log(rootList.getList()[0].getList()[0].getPriority());

// eslint-disable-next-line import/prefer-default-export
export default rootList;
