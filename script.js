//Définitions
const container = document.getElementById('container')
const taskUl = document.getElementById('taskUl')
const taskInput = document.getElementById('taskName')
const addTaskBtn = document.getElementById('addTaskBtn')
let id = 0
//Fonction d'ajout de tâche
const addTask = () => {
	id++
	//creation des elements
	const newTaskLi = document.createElement('li')
	newTaskLi.classList.add('taskLi')
	const newTaskDiv = document.createElement('div')
	newTaskDiv.classList.add('taskDiv')
	const paragraph = document.createElement('p')
	paragraph.innerText = taskInput.value
	//Creation des boutons
	const taskModBtn = document.createElement('i')
	taskModBtn.classList.add('fa-solid', 'fa-pen')
	const taskRemoveBtn = document.createElement('i')
	taskRemoveBtn.classList.add('fa-solid', 'fa-trash-can')
	newTaskLi.id = id
	//ajout dans localStorage
	let task = { name: `${taskInput.value}` }
	localStorage.setItem('taskObject' + id, JSON.stringify(task))
	//insertion des elements
	newTaskDiv.appendChild(paragraph)
	newTaskDiv.appendChild(taskModBtn)
	newTaskDiv.appendChild(taskRemoveBtn)
	newTaskLi.appendChild(newTaskDiv)
	taskUl.appendChild(newTaskLi)
	//vider input
	taskInput.value = ''
}

addTaskBtn.addEventListener('click', () => {
	addTask()
})
