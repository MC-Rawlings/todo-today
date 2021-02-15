export const allLists = (() => {
    const lists = [];

    const addList = list => lists.push(list);
    const getLists = () => lists

    return {getLists};

})();

export const createList = (name) => {
    const list = [];

    const getList = () => {
        return {list};
    }

    const getName = () => name;
    const changeName = newName => name = newName;

    const addTask = (task) => {
        list.push(task);
    }

    return {addTask, getList, getName, changeName};

}