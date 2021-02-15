const modal = document.querySelector(".modal-bg");

const toggleLists = (() => {
    const toggleBtn = document.querySelector(".toggle-lists");
    const lists = document.querySelector(".lists");

    toggleBtn.addEventListener("click", () => {
        lists.style.display === "none" ?
        lists.style.display = "flex" :
        lists.style.display = "none";

    })

})();

const closeModal = (() => {
    const cancelBtn = document.querySelector("#add-task__cancel");

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })

})();

const openModal = (() => {
    const addTaskBtn = document.querySelector(".tasks-add-btn");

    addTaskBtn.addEventListener("click", () => {
    modal.style.display = "block";

    })

})();

const appendTask = (task) => {

    const element = document.createElement("li");
    element.classList.add("task-card");
    element.innerHTML = `
        <div class="check-title">
            <span class="check-icon"><img src="css/images/checkbox.svg" alt=""></span>
            <h4 class="task-title">${task.getName()}</h4>
        </div>
        <p class="task-description">${task.getDescription()}</p>
        <div class="task-options">
            <img src="css/images/flag-grey.svg" alt="" class="priority-flag">
            <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">
            <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">
        </div>
    `;

    return element;


}

export {toggleLists,
        closeModal,
        openModal,
        appendTask};
