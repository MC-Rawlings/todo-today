/* eslint-disable import/no-cycle */
import { render } from './dom';
import createList from './list';
import createTask from './task';

// load default examples
const rootList = createList('Root');
export default rootList;
const defaultList = createList('Home');
rootList.addToList(defaultList);
const defaultTask = createTask('Example', 'Example of a to-do item', 'medium');
defaultList.addToList(defaultTask);

render();
