
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
    })
    close.addEventListener("click",()=>{
        modal.style.display = "none" ;
    })
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