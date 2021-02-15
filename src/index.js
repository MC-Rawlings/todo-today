import _, { appendTask } from './dom';
import {createTask} from './task';
import {createList} from './taskList';

const tasksSection = document.querySelector(".tasks-section");

const homeList = createList("Home");
const exampleTask = createTask("Dishes", "Clean kitchen before 10AM");
homeList.addTask(exampleTask);
console.log(homeList.getList());

tasksSection.appendChild(appendTask(exampleTask));



