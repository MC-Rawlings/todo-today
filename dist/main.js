(()=>{"use strict";const e=((e,t,s,g)=>{let a=!1;return{getName:()=>e,getDescription:()=>t,getDate:()=>s,getPriority:()=>g,getStatus:()=>a,changeName:t=>{e=t},changeDescription:e=>{t=e},changeDate:e=>{s=e},changePriority:e=>{g=e},toggleChecked:()=>{a=!0!==a}}})("dishes","do","12:03",1),t=(e=>{const t=[];return{addTask:e=>{t.push(e)},getList:()=>{console.log(t)}}})();t.addTask(e),t.getList()})();