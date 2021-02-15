 const createTask = (name, description, priority=undefined) => {
    const isChecked = false;

    const getName = () => name;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getStatus = () => isChecked;


    const changeName = (newName) => name = newName;
    const changeDescription = (newDesc) => description = newDesc;
    const changePriority = (newPriority) => priority = newPriority;
    const toggleChecked = () => {
        if (isChecked === true) {
            isChecked = false;
        } else {
            isChecked = true;
        }
    }

    return {getName,
            getDescription,
            getPriority,
            getStatus,
            changeName,
            changeDescription,
            changePriority,
            toggleChecked};
}

export {createTask};