import { appendTask, appendList, toggleModal } from './dom';
import { createList } from './list';
import { createTask } from './task';

// load default examples
const rootList = createList('Root');
const defaultList = createList('Home');
const defaultTask = createTask('Example', 'Example of a to-do item');

defaultList.addTask(defaultTask);
rootList.addTask(defaultList);

appendTask(defaultTask);
appendList(defaultList);

export { defaultList };
