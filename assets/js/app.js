
var btn = document.getElementById("showModal") ;
var modal = document.getElementById("modal-task") ;
var close = document.querySelector(".close") ;
var saveBtn = document.getElementById("saveBtn") ;
var cancelBtn = document.getElementById("cancelBtn") ;

console.log(close);


close.addEventListener("click",()=>{
    modal.style.display = "none" ;
})
btn.addEventListener("click",()=>{
    console.log("click") ;
    modal.style.display = "block" ;
})














function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}

// var name = "helo" ;
// console.log(name);

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
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