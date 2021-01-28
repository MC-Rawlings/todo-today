export const createTask = (name, description="", priority=0,
    dueDate="") => {
    let checked = false;

    const changeName = (newName) => {
        this.name = newName;
    }

    const changeDescription = (newDescription) => {
        this.description = newDescription;
    }

    const changePriority = (newPriority) => {
        this.priority = newPriority;
    }

    const changeDate = (newDate) => {
        this.date = newDate;
    }

    const toggleChecked = () => {

        if (this.checked === true) {
            this.checked = false;
        } else {
            this.checked = true;
        }

    }

    return {name, description, priority, dueDate, checked,
        changeName, changeDescription, changePriority,
        changeDate, toggleChecked};
}