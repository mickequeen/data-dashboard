/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


/*funcionalidad de pestañas*/

/*variables globales*/
var main= document.getElementsByTagName('main');
var lkgen= document.getElementById('gen');
var lkover= document.getElementById('over');
var lkstud= document.getElementById('stud');
var lkteach= document.getElementById('teachers');
var overContainer= document.getElementById('overview');
var studentsContainer= document.getElementById('students');
var jedisContainer= document.getElementById('jedis');

/*evento al clickear el link de estudiantes*/
lkstud.addEventListener('click', function(){
	overContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	studentsContainer.classList.remove('ocultar')
})

/*evento al click en link de jedis*/
lkteach.addEventListener('click', function(){
	overContainer.classList.add('ocultar');
	studentsContainer.classList.add('ocultar');
	jedisContainer.classList.remove('ocultar');
})

/*evento al click de link overview*/
lkover.addEventListener('click', function(){
	studentsContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	overContainer.classList.remove('ocultar');
})
