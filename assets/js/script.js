// Définitions
const container = document.getElementById('container')
const taskUl = document.getElementById('taskUl')
const taskInput = document.getElementById('taskName')
const addTaskBtn = document.getElementById('addTaskBtn')
const dark = document.querySelector('.fa-moon-o')
// Initialisation du tableau tasks avant de le pousser dans localStorage (ou de recupérer son contenu précédent)
let tasks
localStorage.getItem('tasks') != '' ? (tasks = JSON.parse(localStorage.getItem('tasks'))) : (tasks = [])

// Fonction d'ajout de tâche
const addTask = () => {
	if (taskInput.value != '') {
		// Création des éléments
		const newTaskLi = document.createElement('li')
		newTaskLi.classList.add('taskLi')
		const newTaskDiv = document.createElement('div')
		newTaskDiv.classList.add('taskDiv')
		const paragraph = document.createElement('p')
		const taskModBtn = document.createElement('i')
		taskModBtn.classList.add('fa-solid', 'fa-pen')
		const taskRemoveBtn = document.createElement('i')
		taskRemoveBtn.classList.add('fa-solid', 'fa-trash-can')
		paragraph.innerText = taskInput.value
		// Ajout dans localStorage
		let task = { name: `${taskInput.value}`, checked: 'no', archived: 'no' }
		tasks.push(task)
		localStorage.setItem('tasks', JSON.stringify(tasks))
		// Insertion des elements dans le DOM
		newTaskDiv.appendChild(paragraph)
		newTaskDiv.appendChild(taskModBtn)
		newTaskDiv.appendChild(taskRemoveBtn)
		newTaskLi.appendChild(newTaskDiv)
		taskUl.appendChild(newTaskLi)
		displayTasks()
		// Vidange input
		taskInput.value = ''
		displayTasks()
	}
}

// Fonction d'affichage des tâches
const displayTasks = () => {
	const tasks = JSON.parse(localStorage.getItem('tasks'))
	let html = ''
	for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i].name
		let isChecked
		if (tasks[i].checked == 'yes') {
			isChecked = 'checked'
		} else {
			isChecked = ''
		}
		html += `<li class="taskLi">
					<div class="taskDiv">
						<p class="${isChecked}">${task}</p>
						<div class="icons">
							<i class="fa-solid fa-pen"></i>
							<i class="fa-solid fa-trash-can"></i>
						</div>
					<div>
				</li>`
		// =============================
		taskUl.innerHTML = html
	}
	// Ecouteur de pen des tâches déjà présentes
	const pens = document.querySelectorAll('.fa-pen')
	pens.forEach((pen, index) => {
		pen.addEventListener('click', () => {
			const taskNewName = prompt('Nouveau nom de la tâche :')
			if (taskNewName != '') {
				updateTask(index, taskNewName)
			}
		})
	})
	//Ecouteur de trash-can des tâches déjà présentes
	// ====== EXACTEMENT LA MEME FONCTION QUE CELLE JUSTE AU DESSUS, EN PLUS SIMPLE ======
	// Etape 1 : selection de toutes les trash-can, querySelectorAll les regroupe sous forme de tableau
	const trashes = document.querySelectorAll('.fa-trash-can')
	// Etape 2 : navigation dans le tableau avec boucle forEach qui comprend l'index
	trashes.forEach((trash, index) => {
		// Etape 3 : ajout d'écouteur de clic sur CHAQUE trash-can
		trash.addEventListener('click', () => {
			// Etape 4 : appel de la fonction de suppression au clic
			removeTask(index)
			// Etape 5 : raffraichissement de la page pour qu'elle tienne compte des suppressions dans le localStorage
			displayTasks()
			// Etape 6 : Ils vécurent heureux et eurent beaucoup d'enfants
		})
	})
}

// Fonction de mise à jour des tâches
const updateTask = (taskIndex, taskNewName) => {
	const tasks = JSON.parse(localStorage.getItem('tasks'))
	tasks[taskIndex].name = taskNewName
	localStorage.setItem('tasks', JSON.stringify(tasks))
	const taskLi = taskUl.children[taskIndex]
	const taskDiv = taskLi.querySelector('.taskDiv')
	const paragraph = taskDiv.querySelector('p')
	paragraph.innerText = taskNewName
}

// Fonction de suppression de tâches
const removeTask = (taskIndex) => {
	// Etape 1 : on récupère le JSON du localStorage et on le range dans la const tasks
	// const tasks = JSON.parse(localStorage.getItem('tasks'))
	// Etape 2 : on lui splice la face pile au bon index, le second paramêtre étant le nombre d'élément à supprimer, ici 1 seul.
	tasks.splice(taskIndex, 1)
	// Etape 3 : une fois l'objet splicé, on lui dit "retourne d'où tu viens ( dans le localStorage) !"
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Fonction de check de tâche
const markAsDone = () => {
	const paragraphs = document.querySelectorAll('p')
	paragraphs.forEach((par, index) => {
		par.addEventListener('click', () => {
			if (par.classList.contains('checked')) {
				par.classList.remove('checked')
				const tasks = JSON.parse(localStorage.getItem('tasks'))
				tasks[index].checked = 'no'
				localStorage.setItem('tasks', JSON.stringify(tasks))
			} else {
				par.classList.add('checked')
				const tasks = JSON.parse(localStorage.getItem('tasks'))
				tasks[index].checked = 'yes'
				localStorage.setItem('tasks', JSON.stringify(tasks))
			}
		})
	})
}

// Mode sombre
dark.addEventListener('click', () => {
	const body = document.body
	body.classList.toggle('darkBody')
	const wholeContainer = document.querySelector('.container')
	wholeContainer.classList.toggle('darkContainer')
	taskInput.classList.toggle('darkInput')
	const h1 = document.querySelector('h1')
	h1.classList.toggle('darkh1')
	addTaskBtn.classList.toggle('darkButton')
})

// ===== Exécutions =====
// ...au chargement de page
window.onload = () => {
	displayTasks()
	markAsDone()
}

// ...au clic sur "Ajouter"
addTaskBtn.addEventListener('click', () => {
	addTask()
})

// ...en pressant "Entrée"
taskInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		document.getElementById('addTaskBtn').click()
	}
})
