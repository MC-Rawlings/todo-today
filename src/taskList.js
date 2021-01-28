export const createList = (name) => {
    const list = [];

    const getList = () => {
        console.log(list);
    }

    const addTask = (task) => {
        list.push(task);
    }

    return {addTask, getList};

}