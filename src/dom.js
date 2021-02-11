

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
    const modal = document.querySelector(".modal-bg");

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