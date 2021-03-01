/* eslint-disable import/no-cycle */
import {} from './dom';
import createList from './list';
import createTask from './task';

// load default examples
const rootList = createList('Root');
const defaultList = createList('Home');
defaultList.toggleIsActive();
const defaultTask = createTask('Example', 'Example of a to-do item', 'medium');

defaultList.addToList(defaultTask);
rootList.addToList(defaultList);

// eslint-disable-next-line import/prefer-default-export
export default rootList;
