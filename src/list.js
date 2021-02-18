const createList = (title) => {
    let list = [];

    // Getters
    const getTitle = () => title;
const getList = () => list;

    // Setters
    const setTitle = newTitle => title = newTitle;

    // Methods
    const addTask = task => list.push(task);

    const removeTask = taskTitle => {
        let index = list.findIndex(task => {
            task.getTitle === taskTitle;
        })

        list.splice(index, 1);
    }

    return {
        getTitle,
        getList,
        setTitle,
        addTask,
        removeTask
    }
}

// Create list for all other lists created
const rootList = createList("Root");

export {
    createList,
    rootList
}