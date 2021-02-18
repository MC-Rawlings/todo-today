import {createList} from './list'
import {createTask} from './task'
import {appendTask} from './dom'

const rootList = createList("Root");
const defaultList = createList("Home");
const defaultTask = createTask("Example", "Example of a to-do item");

defaultList.addTask(defaultTask);
rootList.addTask(defaultList);

console.log(defaultTask.getTitle());
console.log(defaultTask.getDescription());

appendTask(defaultTask);
