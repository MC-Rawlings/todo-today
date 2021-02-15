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

export {toggleLists,
        closeModal,
        openModal};
