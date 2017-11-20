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

/*evento al clickear generación*/
lkgen.addEventListener('click', function(){
	
})


/*evento al clickear el link de estudiantes*/
lkstud.addEventListener('click', function(){
	overContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	studentsContainer.classList.remove('ocultar')

	var contEst= document.getElementById('contEst');
	/*crear elementos*/



	
	for(var i=0;i<data.SCL['2017-2'].students.length;i++){
	
	
	var nombre= document.createTextNode(data.SCL['2017-2'].students[i].name);

	var contInf= document.createElement('div');
	contInf.setAttribute('class', 'white');
	var parrName=document.createElement('p');
	/*dar padres a hijos*/
	parrName.appendChild(nombre);
	contInf.appendChild(parrName);
	contEst.appendChild(contInf);
	}




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


/*Overview SCL16-2*/

var deserters = document.getElementById("deserters");

/*Recorro  a las alumnas dentro de la base de datos,
para saber cuantas han desertado*/

var activeStudents=[];for (var i=0; i<data.SCL['2017-2'].students.length;i++){
activeStudents.push(data.SCL['2017-2'].students[i].active);
}
var contInactivas=0;
var contActivas=0;

for(var i=0; i<activeStudents.length;i++){
if(activeStudents[i]==false){
contInactivas++
}if(activeStudents[i]==true){
contActivas++
}
}
var total=contActivas+contInactivas;

/*crear elementos*/
var inactivas= document.createTextNode('alumnas inactivas gen 2017-2: ' + contInactivas);
var activas= document.createTextNode('alumnas activas 2017-2: ' + contActivas);
var totalTXT= document.createTextNode('total de alumnas generación 2017-2: ' +total);
var parrafo1= document.createElement('p');
var parrafo2= document.createElement('p');
var parrafo3= document.createElement('p');
var gen20172= document.createElement('div');

/*dar hijos a padres*/
parrafo1.appendChild(inactivas);
parrafo2.appendChild(activas);
parrafo3.appendChild(totalTXT);
gen20172.appendChild(parrafo1);
gen20172.appendChild(parrafo2);
gen20172.appendChild(parrafo3);
deserters.appendChild(gen20172);
/*Esto es una prueba*/

	


