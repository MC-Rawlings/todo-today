import {appendTask} from './dom';
import {createTask} from './task';
import {createList} from './taskList';

const tasksSection = document.querySelector(".tasks-section");

const homeList = createList("Home");
const exampleTask = createTask("Dishes", "Clean kitchen before 10AM");
const exampleTask2 = createTask("Clean the car", "Clean & polish car for interview tomorrow");


homeList.addTask(exampleTask);
homeList.addTask(exampleTask2);
console.log(homeList.getList());

tasksSection.appendChild(appendTask(exampleTask));
tasksSection.appendChild(appendTask(exampleTask2));

console.log(homeList.getList()[0].getStatus());
homeList.getList()[0].toggleChecked();
console.log(homeList.getList()[0].getStatus());

export {homeList}