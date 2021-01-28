export const createTaskList = (name) => {
    let tasks = [];

    const seeTasks = () => {
        return console.log(tasks);
    }

    const addTask = (task) => {
        this.addTask(task);
    }

    const removeTask = (task) => {

    }

    return {name, seeTasks, addTask}
}

