export const createList = (name) => {
    const list = [];

    const getList = () => {
        return list;
    }

    const addTask = (task) => {
        list.push(task);
    }

    return {addTask, getList};

}