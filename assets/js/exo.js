const addCatBtn = document.getElementById('addCatBtn')
const catName = document.getElementById('catName')
const catContainer = document.getElementById('container')
// catContainer.appendChild(addCatBtn).innerHTML = `<i class="fa-solid fa-circle-plus"></i>` // Ajoute la balise <button> à la balise <body>

let id = 0

addCatBtn.addEventListener('click', (event) => {
	event.preventDefault()
	id++
	let catObject = { name: `${catName.value}` }
	localStorage.setItem('catObject', JSON.stringify(catObject))
	createAccordion = document.createElement('div')
	catContainer.appendChild(createAccordion).innerHTML = `
    <div class="row border border-1 border-primary mb-5 d-flex">
	<div class="col-1"></div>
	<div class="col-8 catContainer d-flex" id="${'catContainer' + id}">
		<div class="accordion accordion-flush m-auto" id=${'accordionCat' + id}>
		<div class="accordion-item">
			<h2 class="accordion-header" id="${'flush-headingOne' + id}">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">${catName.value}</button>
			</h2>
			<div id="${'flush-collapseOne' + id}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
				<div class="eaccordion-body d-flex flx-column"></div>
			</div>
		</div>
	</div>
	<div class="modaleee d-flex flex-row justify-content-between mb-2"></div>
	<div class="col-1 d-flex align-items-center justify-content-center"><i id="${'changeCatNameBtn' + id}" class="fa-solid fa-pen"></i></div>
	<div class="col-1 d-flex align-items-center justify-content-center"><i id="${'removeCatBtn' + id}" class="fa-solid fa-trash-can"></i></div>
	<div class="col-1"></div>
</div>`
})
