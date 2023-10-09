// Your code goes here !
//Les variables :
let form = document.querySelector('#todo-form');
let submit = document.querySelector('#todo-submit');
let input = document.querySelector('#todo-input');
let list = document.querySelector('#todo-list');

// Création des functions
function validateTodo(target) {
	target.parentNode.classList.add('done');
	let myData = list.innerHTML;
	setLocalStorage(myData);
}

function deleteTodo(target) {
	target.parentNode.remove();
	let myData = list.innerHTML;
	setLocalStorage(myData);
}
function getLocalStorage(data) {
	data = localStorage.getItem('todo');
	return data;
}
function setLocalStorage(data) {
	localStorage.setItem('todo', data);
}
window.onload = function () {
	// Au chargement de la page
	let mySaveData = getLocalStorage();
	if (mySaveData != null) {
		//s'il y a des données dans le local storage
		list.innerHTML = mySaveData; //on les injecte dans le ul
	} else {
		list.innerHTML = ''; //Sinon injecte une chaine vide.
	}
};

submit.addEventListener('click', function (e) {
	e.preventDefault(); // pour ne pas recharger la page
	let myTask = input.value; //Pour récupérer la valeur de l'input
	if (myTask == '') {
		alert('Veuillez saisir une tâche');
		return false;
	}
	input.value = ''; //¨Pour vider entrée formulaire ou utiliser form.reset
	let li = document.createElement('li'); // pour créer élément li
	let liContent = `
        <span>${myTask}</span>
        <button class="btn btn-danger" onclick="deleteTodo(this)">Supprimer</button>
        <button class="btn btn-success" onclick="validateTodo(this)">Fait</button>
    `;

	li.innerHTML = liContent; // pour ajouter le contenu de l'input dans le li
	list.appendChild(li); // Pour ajouter li dans la liste
	let myData = list.innerHTML;
	setLocalStorage(myData);
});
