(()=>{"use strict";const e=(e=>{let o=[];return{name:"Personal",seeTasks:()=>console.log(o),addTask:e=>{(void 0).addTask(e)}}})();console.log(e);const o=((e,o="",d=0,c="")=>({name:"dishes",description:o,priority:d,dueDate:c,checked:!1,changeName:e=>{(void 0).name=e},changeDescription:e=>{(void 0).description=e},changePriority:e=>{(void 0).priority=e},changeDate:e=>{(void 0).date=e},toggleChecked:()=>{!0===(void 0).checked?(void 0).checked=!1:(void 0).checked=!0}}))();console.log(o),e.addTask(o),console.log(e)})();