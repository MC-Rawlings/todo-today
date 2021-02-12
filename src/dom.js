import {createTask} from './task'


    const modal = document.querySelector(".modal-bg");

export const toggleLists = (() => {
    const toggleBtn = document.querySelector(".toggle-lists");
    const lists = document.querySelector(".lists");

    toggleBtn.addEventListener("click", () => {
        lists.style.display === "none" ?
        lists.style.display = "flex" :
        lists.style.display = "none";

    })
})();

export const closeModal = (() => {
    const cancelBtn = document.querySelector("#add-task__cancel");

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })

})();

export const openModal = (() => {
    const addTaskBtn = document.querySelector(".tasks-add-btn");
    const modal = document.querySelector(".modal-bg");

    addTaskBtn.addEventListener("click", () => {
    modal.style.display = "block";

})

})();

const addTask = (() => {
    const form = document.querySelector("form");
    const tasksSection = document.querySelector(".tasks-section");
    const addBtn = document.querySelector("#add-task__confirm");


    addBtn.addEventListener("click", () => {
        let taskTitle = form.elements[0].value;
        let taskDescription = form.elements[1].value;

        const task = document.createElement("li");
        task.classList.add("task-card");
        task.innerHTML = `
                <div class="check-title">
                    <span class="check-icon"><img src="css/images/checkbox.svg" alt=""></span>
                    <h4 class="task-title">${taskTitle}</h4>
                </div>
                <p class="task-description">${taskDescription}</p>
                <div class="task-options">
                    <img src="css/images/flag-grey.svg" alt="" class="priority-flag">
                    <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">
                    <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">
                </div>
        `;

        tasksSection.appendChild(task);
        form.reset();
        modal.style.display = "none";
    });

})();
