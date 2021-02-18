const createTask = (title, description) => {
    let isChecked = false;

    // Getters
    const getTitle = () => title;
    const getDescription = () => description;
    const getIsChecked = () => isChecked;

    // Setters
    const setTitle = newTitle => title = newTitle;
    const setDescription = newDescription => description = newDescription;

    const toggleCheck = () => {
        isChecked === false ?
        isChecked = true :
        isChecked = false;
    }

    return {
        getTitle,
        getDescription,
        getIsChecked,
        setTitle,
        setDescription,
        toggleCheck
    }
}

export {
    createTask
}