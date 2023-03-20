//Définitions
const container = document.getElementById('container')
const taskUl = document.getElementById('taskUl')
const taskInput = document.getElementById('taskName')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskModBtn = document.createElement('i')
taskModBtn.classList.add('fa-solid', 'fa-pen')
const taskRemoveBtn = document.createElement('i')
taskRemoveBtn.classList.add('fa-solid', 'fa-trash-can')
let tasks = []
//Fonction d'ajout de tâche
const addTask = () => {
	if (taskInput.value != '') {
		//creation des elements
		const newTaskLi = document.createElement('li')
		newTaskLi.classList.add('taskLi')
		const newTaskDiv = document.createElement('div')
		newTaskDiv.classList.add('taskDiv')
		const paragraph = document.createElement('p')
		paragraph.innerText = taskInput.value
		//ajout dans localStorage
		let task = { name: `${taskInput.value}`, checked: 'no', archived: 'no' }
		tasks.push(task)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		//insertion des elements
		newTaskDiv.appendChild(paragraph)
		newTaskDiv.appendChild(taskModBtn)
		newTaskDiv.appendChild(taskRemoveBtn)
		newTaskLi.appendChild(newTaskDiv)
		taskUl.appendChild(newTaskLi)
		//vider input
		taskInput.value = ''
	}
}

//Fonction d'affichage des tâches
const displayTasks = () => {
	const tasks = JSON.parse(localStorage.getItem('tasks'))
	let html = ''
	for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i].name
		console.log(task)
		html += `<li class="taskDiv">
					<div class="taskDiv">
						<p>${task}</p>
						<i class="fa-solid fa-pen"></i>
						<i class="fa-solid fa-trash-can"></i>
					<div>
				</li>`
	}
	taskUl.innerHTML = html
}

window.onload = () => {
	displayTasks()
}

addTaskBtn.addEventListener('click', () => {
	addTask()
})
