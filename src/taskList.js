const createList = (name) => {
    const list = [];

    const getList = () => list;

    const getName = () => name;
    const changeName = newName => name = newName;

    const addTask = (task) => {
        list.push(task);
    }

    return {addTask,
            getList,
            getName,
            changeName};

}

export {createList};