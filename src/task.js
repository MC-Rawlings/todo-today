 export const createTask = (name, description, dueDate=undefined,
    priority=undefined) => {

        let isChecked = false;

    const getName = () => name;
    const getDescription = () => description;
    const getDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => isChecked;


    const changeName = (newName) => {
        name = newName;
    }

    const changeDescription = (newDesc) => {
        description = newDesc;
    }

    const changeDate = (newDate) => {
        dueDate = newDate;
    }

    const changePriority = (newPriority) => {
        priority = newPriority;
    }

    const toggleChecked = () => {
        if (isChecked === true) {
            isChecked = false;
        } else {
            isChecked = true;
        }
    }

    return {getName, getDescription, getDate,
        getPriority, getStatus, changeName, changeDescription,
        changeDate, changePriority, toggleChecked};
}