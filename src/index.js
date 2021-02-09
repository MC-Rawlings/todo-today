import {toggleLists} from './dom';

const addTaskBtn = document.querySelector(".tasks-add-btn");
const modal = document.querySelector(".modal-bg");

addTaskBtn.addEventListener("click", () => {
    modal.style.display = "block";

})

toggleLists();



