import {createTask} from './task'

const createList = (title) => {
    let list = [];
    let isActive = false;

    // Getters
    const getTitle = () => title;
    const getList = () => list;

    // Setters
    const setTitle = newTitle => title = newTitle;
    const toggleIsActive = () => {
        isActive === false ?
        isActive = true :
        isActive = false;
    }

    // Methods
    const addTask = task => list.push(task);

    const removeTask = taskTitle => {
        let index = list.findIndexconsole.log(rootList.getList()[0].getTitle());(task => {
            task.getTitle === taskTitle;
        })

        list.splice(index, 1);
    }

    return {
        getTitle,
        getList,
        setTitle,
        addTask,
        removeTask,
        toggleIsActive
    }
}


export {
    createList
}