(()=>{"use strict";const e=document.querySelector(".modal-bg"),s=((()=>{const e=document.querySelector(".toggle-lists"),s=document.querySelector(".lists");e.addEventListener("click",(()=>{"none"===s.style.display?s.style.display="flex":s.style.display="none"}))})(),document.querySelector("#add-task__cancel").addEventListener("click",(()=>{e.style.display="none"})),document.querySelector(".tasks-add-btn").addEventListener("click",(()=>{e.style.display="block"})),document.querySelector(".tasks-section")),t=(e=>{const s=[];return{addTask:e=>{s.push(e)},getList:()=>s,getName:()=>e,changeName:s=>e=s}})("Home"),c=((e,s,t)=>{const c=!1;return{getName:()=>e,getDescription:()=>s,getPriority:()=>t,getStatus:()=>c,changeName:s=>e=s,changeDescription:e=>s=e,changePriority:e=>t=e,toggleChecked:()=>{c=!0!==c}}})("Dishes","Clean kitchen before 10AM");t.addTask(c),console.log(t.getList()),s.appendChild((e=>{const s=document.createElement("li");return s.classList.add("task-card"),s.innerHTML=`\n        <div class="check-title">\n            <span class="check-icon"><img src="css/images/checkbox.svg" alt=""></span>\n            <h4 class="task-title">${e.getName()}</h4>\n        </div>\n        <p class="task-description">${e.getDescription()}</p>\n        <div class="task-options">\n            <img src="css/images/flag-grey.svg" alt="" class="priority-flag">\n            <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">\n            <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">\n        </div>\n    `,s})(c))})();