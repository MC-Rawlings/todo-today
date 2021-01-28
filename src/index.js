import {createTask} from './task'

const dishes = createTask("dishses", "do dishses in the morning", 12.04, 2);
console.log(dishes);
dishes.getInfo();