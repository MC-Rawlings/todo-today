const createItem = (title, description, priority) => {

    const changeTitle = (newTitle) => {
        this.title = newTitle;
    }

    const changeDescription = (newDescription) => {
        this.title = newDescription;
    }

    const changePriority = (newPriority) => {
        this.title = newPriority;
    }

    return {changeTitle, changeDescription, changePriority};

}