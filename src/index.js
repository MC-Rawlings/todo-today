import {createTask} from './task'
import {createList} from './taskList'

const newTask = createTask("dishes", "do", "12:03", 1);

const newList = createList("Personal");
newList.addTask(newTask);
newList.getList();

