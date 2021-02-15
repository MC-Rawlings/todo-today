import _ from './dom';
import {createTask} from './task';
import {createList} from './taskList';

const homeList = createList("Home");
const exampleTask = createTask("Dishes", "Clean kitchen before 10AM");

homeList.addTask(exampleTask);
console.log(homeList.getList()[0].getStatus());

