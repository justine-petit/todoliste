

addCatBtn=document.createElement('button')//Créer un élément <button>
catContainer=document.getElementById('container')
catContainer.appendChild(addCatBtn).innerHTML=`<i class="fa-solid fa-circle-plus"></i>`// Ajoute la balise <button> à la balise <body>

let id=0




addCatBtn.addEventListener('click',event =>{
    event.preventDefault();
    id++
    localStorage.setItem( 'cat' ,  'exemple' ) 
    createAccordion=document.createElement("div")
    catContainer.appendChild(createAccordion).innerHTML=`<div class="accordion accordion-flush w-80 m-auto" id=${"accordionCat"+id}>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Catégorie</button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column">
                <div class="modaleee d-flex flex-row justify-content-between mb-2">`

})

console.log()



