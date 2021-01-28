 export const createTask = (name, description, dueDate, priority) => {
    let isChecked = false;

    const getInfo = () => console.log(name, description, dueDate,
        priority, isChecked);

    const changeName = (newName) => {
        this.name = newName;
    }

    const changeDescription = (newDesc) => {
        this.description = newDesc;
    }

    const changeDate = (newDate) => {
        this.dueDate = newDate;
    }

    const changePriority = (newPriority) => {
        this.priority = newPriority;
    }

    const toggleChecked = () => {
        if (this.isChecked === true) {
            this.isChecked = false;
        } else {
            this.isChecked = true;
        }
    }

    return {getInfo, changeName, changeDescription, changeDate,
        changePriority, toggleChecked};
}