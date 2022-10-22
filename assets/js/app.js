
var showModal = document.getElementById("showModal") ;
var modal = document.getElementById("modal-task") ;
var close = document.querySelector(".close") ;
var saveBtn = document.getElementById("saveBtn") ;
var cancelBtn = document.getElementById("cancelBtn") ;
var addTaskForm = document.getElementById("form") ;

var modalFooter = document.getElementById("modal-footer") ;


var toDoTask = document.getElementById("to-do-tasks") ;
var inProgress = document.getElementById("in-progress-tasks") ;
var done = document.getElementById("done-tasks") ;


console.log(tasks) ;

addTaskForm.addEventListener("submit",saveTask) ;
// displayTasks() ;
createTask() ;


function createTask() {
    initTaskForm();
    showModal.addEventListener("click",()=>{
        modal.style.display = "block" ;
    }) ;
    close.addEventListener("click",()=>{
        modal.style.display = "none" ;
    }) ;
}


function saveTask(event) {
    event.preventDefault() ;
    console.log("here save task")
    var title = document.getElementById("title") ;
    var types = document.querySelectorAll('input[type=radio]') ;
    var priority = document.getElementById("priority") ;
    var statuS = document.getElementById("status") ;
    var date = document.getElementById("date") ;
    var description = document.getElementById("description") ;
      
    for(let i =0 ; i< types.length ;i++) var checkedRadio = (types[i].checked == true) ? types[i].value : null ;
    var priorityValue = priority.options[priority.selectedIndex].value ;
    var statusValue = statuS.options[statuS.selectedIndex].value ;
        
    var toDoObject = {
    title :title.value,
    type :  checkedRadio ,
    priority : priorityValue,
    status :statusValue,
    date :date.value,
    description :description.value 
    }   

    tasks.push(toDoObject) ;
    console.log(toDoObject) ;
    console.log(tasks.length) ;
    initTaskForm() ;
    modal.style.display = "none" ;
    displayTasks() ;

}

function editTask(i) {

    document.getElementById("title").value = tasks[i].title;
    if (tasks[i].type === "Bug") {
        document.getElementById("bug").checked = true;
      } else {
        document.getElementById("feature").checked = true;
    }
    document.getElementById("priority").value = tasks[i].priority;
    document.getElementById("status").value = tasks[i].status;
    document.getElementById("date").value = tasks[i].date;
    document.getElementById("description").value = tasks[i].description;
    modalFooter.innerHTML = `<button form="form" type="submit" id="edit" onclick="updateTask(${i})" class="btn high shadow-sm "> Save edit changes </button> `
    modal.style.display = "block" ;
}

function updateTask(i) {
    let toDoObject = {
      title: document.getElementById("title").value,
      type: radiocheck().value,
      priority: document.getElementById("priority").value,
      status: document.getElementById("status").value,
      date: document.getElementById("date").value,
      description: document.getElementById("description").value,
    };
    tasks[i] = toDoObject;

    modal.style.display = "none" ;
    // Refresh tasks
    displayTasks() ;
}

function deleteTask(i) {
    tasks.splice(i,1);
    console.log("hiii!!!! "+ i ) ;
    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}



function initTaskForm() {
    addTaskForm.reset()
}

function reloadTasks() {
        inProgress.innerHTML = "";
        done.innerHTML = "";
        toDoTask.innerHTML = "";
}

function displayTasks(){
    reloadTasks() ;
    var toDoCounter = 0 ;var inProgressCounter =0 ;var doneCounter =0 ; 
    for(let i=0 ; i<tasks.length;i++){
        if (tasks[i].status == "To Do") {
            toDoCounter++ ;
            console.log(toDoCounter)
            toDoTask.innerHTML += `
            <button class="tasks d-flex m-2">
                <div class="mx-2">
                    <i class="bi bi-question-circle-fill"></i>
                </div>
                <div class="border border-1 text-start p-2">
                    <p class="fw-bold">${tasks[i].title}</p>
                    <div class="">
                        <p class="fw-light">${tasks[i].date}</p>
                        <p class="fw-normal" >${tasks[i].description.slice(0,30)}</p>
                        <i class="bi bi-trash-fill me-1" onclick="deleteTask(${i})"></i>
                        <i class="bi bi-pencil-square me-1"  onclick="editTask(${i})"></i>
                    </div>
                </div>	
                <div class="mt-3">
                    <span class="high btn m-2">${tasks[i].priority}</span>
                    <span class="btn">${tasks[i].type}</span>
                </div>
            </button>
            `;
          }
           else if (tasks[i].status == "In Progress") {
            inProgressCounter++ ;
            console.log(inProgressCounter)
            inProgress.innerHTML += `
            <button class="tasks d-flex m-2">
            <div class="mx-2">
                <i class="spinner-border spinner-border-sm-text-green mt-3"></i> 
            </div>
            <div class="border border-1 text-start p-2">
                <p class="">${tasks[i].title}</p>
                <div class="">
                    <p class="">${tasks[i].date}</p>
                    <p class="">${tasks[i].description.slice(0,30)}</p>
                    <i class="bi bi-trash-fill me-1" onclick="deleteTask(${i})"></i>
                    <i class="bi bi-pencil-square me-1"  onclick="editTask(${i})"></i>
                </div>
            </div>
            <div class="mt-3">
                <span class="high btn m-2">${tasks[i].priority}</span>
                <span class="btn">${tasks[i].type}</span>
            </div>
        </button>
            `;
          } else if (tasks[i].status == "Done") {
            doneCounter++ ;
            console.log(doneCounter) ;
           done.innerHTML += ` 
           <button class="tasks d-flex m-2">
            <div class="mx-2">
               <i class="bi bi-check-circle-fill"></i>
           </div>
           <div class="border border-1 text-start p-2">
               <p class="fw-bold">${tasks[i].title}</p>
               <div class="">
                   <p class="fw-light">${tasks[i].date}</p>
                   <p class="fw-normal" >${tasks[i].description.slice(0,30)}</p>
                   <i class="bi bi-trash-fill me-1" onclick="deleteTask(${i})"></i>
                   <i class="bi bi-pencil-square me-1"  onclick="editTask(${i})"></i>
               </div>
           </div>
           <div class="mt-3">
               <span class="high btn m-2">${tasks[i].priority}</span>
               <span class="btn ">${tasks[i].type}</span>
           </div>
        </button> `
    }
        } ;

    var toDotasksCount = document.getElementById("to-do-tasks-count") ;
    var inProgressCount= document.getElementById("in-progress-tasks-count") ;
    var doneTasksCount = document.getElementById("done-tasks-count") ;
    toDotasksCount.innerHTML = toDoCounter ;
    inProgressCount.innerHTML = inProgressCounter ;
    doneTasksCount.innerHTML = doneCounter ;
}