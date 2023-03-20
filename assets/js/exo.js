// création du bouton Supprimer
let btnDelete = document.createElement('button');
btnDelete.innerHTML = "Supprimer";
document.body.appendChild(btnDelete);

let i = 0;

// supprimer une tâche

btnDelete.addEventListener('click', event =>{
    event.preventDefault();
    i--
    localStorage.removeItem('task')
    setStorage()
})

// ou 

function removeToDo(task){
    task.parentNode.parentNode.removeChild(task.parentNode);
    i--;
}





