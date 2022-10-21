var toDoTask = document.getElementById("to-do-tasks") ;
var inProgresse = document.getElementById("in-progress-tasks") ;
var done = document.getElementById("done-tasks") ;
console.log(tasks);

for(let i=0 ; i<tasks.length;i++){
if (tasks[i].status == "Done") {
    toDoTask.innerHTML += `<button class="card  d-flex flex-row justify-content-around align-items-center border-bottom border-muted p-2 border rounded-2 mb-2 cart shadow-sm" >
  <div class="col-1">
  <i class="bi bi-check2-square fs-3"></i>
  </div>
  <div class="col-11 d-flex justify-content-around align-items-center">
      <div class=" col-9 card-body text-start">
          <div class="card-title fs-5 "><strong> ${tasks[i].title} </strong></div>
          <div class="card-subtitle mb-2 text-muted">#${i + 1} created in  ${tasks[i].date}</div>
          <div class="card-text" title=" ${tasks[i].description}"> ${tasks[ i].description.substring(0, 40)}...</div>
          <div>
          <i class="bi bi-trash text-danger  me-1" onclick="deleteTask(${i})"></i>
          <i class="bi bi-pen text-yelow me-1"  onclick="editTask(${i})"></i>
          </div>
      </div>
      <div class="col-3 d-flex flex-column align-content-center">
          <span class="btn  mb-1 text-white p-2 w-100 high" >${tasks[i].priority}</span>
          <span class="btn btn-white bg-white p-2 border text-black w-100 bug">${tasks[i].type}</span>
      </div>
  </div>
  </button>` ;
  }
   else if (tasks[i].status == "In Progress") {
    inProgress.innerHTML += `<button class="card  d-flex flex-row justify-content-around align-items-center border-bottom border-muted p-2 border rounded-2 mb-2 cart shadow-sm" >
  <div class="col-1">
  <i class="spinner-border spinner-border-sm text-green me-1"></i>
  </div>
  <div class="col-11 d-flex justify-content-around align-items-center">
      <div class="col-9 card-body text-start">
          <div class="card-title fs-5 "><strong> ${ tasks[i].title} </strong></div>
          <div class="card-subtitle mb-2 text-muted">#${i + 1} created in  ${tasks[i].date}</div>
          <div class="card-text" title=" ${tasks[i].description}" > ${tasks[i].description.substring(0, 40)}...</div>
          <div>
          <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
          <i class="bi bi-pen text-yelow me-1"  onclick="editTask(${i})"></i>
          </div>
      </div>
      <div class="col-3 d-flex flex-column align-content-center">
      <span class="btn  mb-1 text-white p-2 w-100 high" >${tasks[i].priority}</span>
      <span class="btn btn-white bg-white p-2 border text-black w-100 bug">${ tasks[i].type }</span>
      </div>
  </div>
  </button>`;
  } else if (tasks[i].status == "To Do") {
    toDo.innerHTML += `<button class="card  d-flex flex-row justify-content-around align-items-center border-bottom border-muted p-2 border rounded-2 mb-2 cart shadow-sm" >
  <div class="col-1">
      <i class="bi bi-question-circle fs-3"></i>
  </div>
  <div class="col-11 d-flex justify-content-around align-items-center">
      <div class="col-9 card-body text-start">
          <div class="card-title fs-5 "><strong> ${tasks[i].title} </strong></div>
          <div class="card-subtitle mb-2 text-muted">#${i + 1} created in  ${tasks[i].date}</div>
          <div class="card-text" title=" ${tasks[i].description}" > ${tasks[i].description.substring(0, 40)}...</div>
          <div>
          <i class="bi bi-trash text-danger me-1" onclick="deleteTask(${i})"></i>
          <i class="bi bi-pen text-yelow me-1"  onclick="editTask(${i})"></i>
          </div>
      </div>
      <div class="col-3 d-flex flex-column align-content-center">
      <span class="btn  mb-1 text-white p-2 w-100 high" >
      ${tasks[i].priority}</span>
      <span class="btn btn-white bg-white p-2 border text-black w-100 bug">${tasks[i].type}</span>
      </div>
  </div>
  </button>`;
  }
}


var showModal = document.getElementById("showModal") ;
var modal = document.getElementById("modal-task") ;
var close = document.querySelector(".close") ;
var saveBtn = document.getElementById("saveBtn") ;
var cancelBtn = document.getElementById("cancelBtn") ;
var addTaskForm = document.getElementById("form") ;

// fetch data from yteh form .

createTask() ;
saveTask() ;


function createTask() {
    showModal.addEventListener("click",()=>{
        modal.style.display = "block" ;
    }) ;

    close.addEventListener("click",()=>{
        modal.style.display = "none" ;
    }) ;
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
}


function saveTask() {

    var title = document.getElementById("title") ;
    var types = document.querySelectorAll('input[type=radio]') ;
    var priority = document.getElementById("priority") ;
    var statuS = document.getElementById("status") ;
    var date = document.getElementById("date") ;
    var description = document.getElementById("description") ;

    addTaskForm.addEventListener("submit",(e)=>{
        e.preventDefault() ;
        for(let i =0 ; i< types.length ;i++){
           var checkedRadio = (types[i].checked == true) ? types[i].value : null ;
        }
        var priorityValue = priority.options[priority.selectedIndex].value ;
        var statusValue = statuS.options[statuS.selectedIndex].value ;
    
        toDoObject.title = title.value ;
        toDoObject.type = checkedRadio ;
        toDoObject.priority = priorityValue ;
        toDoObject.status = statusValue ;
        toDoObject.date = date.value ;
        toDoObject.description = description.value ;
        toDoData.push(toDoObject) ;
        
        console.log(toDoData);
    } ) ;
    var toDoData = [] ;
    var toDoObject = {
    title :"",
    type : "" ,
    priority : "",
    status :"",
    date :"",
    description :"" 
}
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks ==> add the added data to the page . 


    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}