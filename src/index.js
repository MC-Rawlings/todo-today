import {createTask} from './tasks';
import {createTaskList} from './taskList';

const personal = createTaskList("Personal");
console.log(personal);
const dishes = createTask("dishes");
console.log(dishes);

personal.addTask(dishes);
console.log(personal);