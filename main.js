(()=>{"use strict";const e=e=>{let t=[],s=!1;return{getTitle:()=>e,getList:()=>t,setTitle:t=>e=t,addTask:e=>t.push(e),removeTask:e=>{let s=t.findIndexconsole.log(rootList.getList()[0].getTitle());t.splice(s,1)},toggleIsActive:()=>{s=!1===s}}},t=e("Root"),s=e("Home"),i=((e,t)=>{let s=!1;return{getTitle:()=>e,getDescription:()=>t,getIsChecked:()=>s,setTitle:t=>e=t,setDescription:e=>t=e,toggleCheck:()=>{s=!1===s}}})("Example","Example of a to-do item");s.addTask(i),t.addTask(s),console.log(i.getTitle()),console.log(i.getDescription()),(e=>{const t=e.getTitle(),s=e.getDescription(),i=document.createElement("li");i.classList.add("task-card"),i.innerHTML=`\n        <div class="check-title">\n            <img src="css/images/checkbox.svg" alt="" class="check-icon">\n            <h4 class="task-title">${t}</h4>\n        </div>\n        <p class="task-description">${s}</p>\n        <div class="task-options">\n            <img src="css/images/flag-grey.svg" alt="" class="priority-flag">\n            <img src="css/images/edit.svg" alt="" class="task-option-btn task-edit">\n            <img src="css/images/delete.svg" alt="" class="task-option-btn task-delete">\n        </div>\n    `,document.querySelector(".tasks-section").appendChild(i)})(i)})();