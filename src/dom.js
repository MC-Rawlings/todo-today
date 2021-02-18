const appendTask = task => {
    const taskTitle = task.getTitle();
    const taskDescription = task.getDescription();

    const toAppend = document.createElement("li");
    toAppend.classList.add("task-card");
    toAppend.innerHTML = `
        <div class="check-title">
            <img src="css/images/checkbox.svg" alt="" class="check-icon">
            <h4 class="task-title">${taskTitle}</h4>
        </div>
        <p class="task-description">${taskDescription}</p>
        <div class="task-options">
            <img src="css/images/flag-grey.svg" alt="" class="priority-flag">
            <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">
            <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">
        </div>
    `;

    document.querySelector(".tasks-section").appendChild(toAppend);
}

const appendList = list => {
    const listTitle = list.getTitle();

    const toAppend = document.createElement("li");
    toAppend.classList.add("list-item");
    toAppend.innerText = `${listTitle}`;

    document.querySelector(".lists").appendChild(toAppend);
}

export {
    appendTask,
    appendList
}