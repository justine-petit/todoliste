//Définitions
const container = document.getElementById('container')
const taskUl = document.getElementById('taskUl')
const taskInput = document.getElementById('taskName')
const addTaskBtn = document.getElementById('addTaskBtn')
//Boutons
const taskModBtn = document.createElement('i')
taskModBtn.classList.add('fa-solid', 'fa-pen', 'updateTaskBtn')
const taskRemoveBtn = document.createElement('i')
taskRemoveBtn.classList.add('fa-solid', 'fa-trash-can', 'removeTaskBtn')
//Initialisation du tableau tasks avant de le pousser dans localStorage
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
		//écouteur du pen
		taskModBtn.addEventListener('click', () => {
			const taskNewName = prompt('Nouveau nom de la tâche :')
			if (taskNewName !== '') {
				paragraph.innerText = taskNewName
			}
		})
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

	//ajout de l'écouteur de pen
	const pens = document.querySelectorAll('.fa-pen')
	pens.forEach((pen, index) => {
		pen.addEventListener('click', () => {
			const taskNewName = prompt('Nouveau nom de la tâche :')
			if (taskNewName != '') {
				updateTask(index, taskNewName)
			}
		})
	})
}

//Fonction de mise à jour des tâches
const updateTask = (taskIndex, taskNewName) => {
	const tasks = JSON.parse(localStorage.getItem('tasks'))
	tasks[taskIndex].name = taskNewName
	localStorage.setItem('tasks', JSON.stringify(tasks))

	const taskLi = taskUl.children[taskIndex]
	const taskDiv = taskLi.querySelector('.taskDiv')
	const paragraph = taskDiv.querySelector('p')
	paragraph.innerText = taskNewName
}

window.onload = () => {
	displayTasks()
}

addTaskBtn.addEventListener('click', () => {
	addTask()
})
