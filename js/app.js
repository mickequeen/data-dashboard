/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


/*funcionalidad de pestañas*/

/*variables globales*/
var main= document.getElementsByTagName('main');
var lkover= document.getElementById('over');
var lkstud= document.getElementById('stud');
var lkteach= document.getElementById('teachers');
var overContainer= document.getElementById('overview');
var studentsContainer= document.getElementById('students');
var jedisContainer= document.getElementById('jedis');



/*evento al clickear el link de estudiantes*/
lkstud.addEventListener('click', function(){
	lkstud.classList.add('select');
	lkover.classList.remove('select');
	lkteach.classList.remove('select');
	overContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	studentsContainer.classList.remove('ocultar');

	/*rescatar contenedor para cada estudiante*/
	var contEst20172= document.getElementById('contEst2017_2');
	
	for(var i=0;i<data.SCL['2017-2'].students.length;i++){
	
	/*datos que  con cada ciclo del for*/
	var nombre= document.createTextNode(data.SCL['2017-2'].students[i].name);
	var imgSRC= (data.SCL['2017-2'].students[i].photo);

	/*elementos, contenedores y clases*/
	var contInf= document.createElement('div');
	contInf.setAttribute('class', 'studentsContainer');
	var img= document.createElement('img');
	img.setAttribute('src', imgSRC);
	img.setAttribute('class', 'profilePicture');
	var contDatos= document.createElement('div');
	contDatos.setAttribute('class', 'datoAlumna')
	var parrName=document.createElement('p');
	parrName.setAttribute('class', 'pName');

	/*dar padres a hijos*/
	contInf.appendChild(img);
	parrName.appendChild(nombre);
	contDatos.appendChild(parrName);
	contInf.appendChild(contDatos);
	contEst20172.appendChild(contInf);
	}

	/*contenedor 2017 1*/
	var contEst20171= document.getElementById('contEst2017_1');
	
	for(var i=0;i<data.SCL['2017-1'].students.length;i++){
	
	/*datos que  con cada ciclo del for*/
	var nombre7_1= document.createTextNode(data.SCL['2017-1'].students[i].name);
	var imgSRC7_1= (data.SCL['2017-1'].students[i].photo);

	/*elementos, contenedores y clases*/
	var contInf7_1= document.createElement('div');
	contInf7_1.setAttribute('class', 'studentsContainer');
	var img7_1= document.createElement('img');
	img7_1.setAttribute('src', imgSRC);
	img7_1.setAttribute('class', 'profilePicture');
	var contDatos7_1= document.createElement('div');
	contDatos7_1.setAttribute('class', 'datoAlumna')
	var parrName7_1=document.createElement('p');
	parrName7_1.setAttribute('class', 'pName');

	/*dar padres a hijos*/
	contInf7_1.appendChild(img7_1);
	parrName7_1.appendChild(nombre7_1);
	contDatos7_1.appendChild(parrName7_1);
	contInf7_1.appendChild(contDatos7_1);
	contEst20171.appendChild(contInf7_1);
	}

	/*llenado contenedor 2016-2*/
	var contEst20162= document.getElementById('contEst2016_2');
	
	for(var i=0;i<data.SCL['2016-2'].students.length;i++){
	
	/*datos que  con cada ciclo del for*/
	var nombre6_2= document.createTextNode(data.SCL['2016-2'].students[i].name);
	var imgSRC6_2= (data.SCL['2016-2'].students[i].photo);

	/*elementos, contenedores y clases*/
	var contInf6_2= document.createElement('div');
	contInf6_2.setAttribute('class', 'studentsContainer');
	var img6_2= document.createElement('img');
	img6_2.setAttribute('src', imgSRC);
	img6_2.setAttribute('class', 'profilePicture');
	var contDatos6_2= document.createElement('div');
	contDatos6_2.setAttribute('class', 'datoAlumna')
	var parrName6_2=document.createElement('p');
	parrName6_2.setAttribute('class', 'pName');

	/*dar padres a hijos*/
	contInf6_2.appendChild(img6_2);
	parrName6_2.appendChild(nombre6_2);
	contDatos6_2.appendChild(parrName6_2);
	contInf6_2.appendChild(contDatos6_2);
	contEst20162.appendChild(contInf6_2);
	}

	/*variables para rescatar opciones de selector multiple*/
	var opcion2016_2= document.getElementById('20162');
	var opcion2017_1= document.getElementById('20171');
	var opcion2017_2= document.getElementById('20172');
	var titulo= document.getElementById('generacionEst');

	opcion2016_2.addEventListener('click', function(){
		titulo.innerHTML='Generación SCL 2016-2';
		contEst20162.classList.remove('ocultar');
		contEst20171.classList.add('ocultar');
		contEst20172.classList.add('ocultar');	

	})
	opcion2017_1.addEventListener('click', function(){
		titulo.innerHTML='Generación SCL 2017-1';
		contEst20162.classList.add('ocultar');
		contEst20171.classList.remove('ocultar');
		contEst20172.classList.add('ocultar');	
	});
	opcion2017_2.addEventListener('click', function(){
		titulo.innerHTML='Generación SCL 2017-2';
		contEst20162.classList.add('ocultar');
		contEst20171.classList.add('ocultar');
		contEst20172.classList.remove('ocultar');	
	});



});


/*evento al click en link de jedis*/
lkteach.addEventListener('click', function(){
	overContainer.classList.add('ocultar');
	studentsContainer.classList.add('ocultar');
	jedisContainer.classList.remove('ocultar');
	lkstud.classList.remove('select');
	lkover.classList.remove('select');
	lkteach.classList.add('select');
})

/*evento al click de link overview*/
lkover.addEventListener('click', function(){
	studentsContainer.classList.add('ocultar');
	jedisContainer.classList.add('ocultar');
	overContainer.classList.remove('ocultar');
	lkstud.classList.remove('select');
	lkover.classList.add('select');
	lkteach.classList.remove('select');
})

/*evento de click a elementos de overview*/
var lkovGen6_2= document.getElementById('ovGen6_2');
var lkovGen7_1= document.getElementById('ovGen7_1');
var lkovGen7_2= document.getElementById('ovGen7_2');
var contGraf6_2= document.getElementById('2016__2');
var contGraf7_1= document.getElementById('2017__1');
var contGraf7_2= document.getElementById('2017__2');


/*evento al hacer click en link de generacion 2016-2 en overview*/
lkovGen6_2.addEventListener('click', function(){
	contGraf6_2.classList.remove('ocultar');
	contGraf7_1.classList.add('ocultar');
	contGraf7_2.classList.add('ocultar');
	lkovGen6_2.classList.add('select');
	lkovGen7_1.classList.remove('select');
	lkovGen7_2.classList.remove('select');
})
/*evento al click de link gen 2017-1 en overview*/

lkovGen7_1.addEventListener('click', function(){
	contGraf6_2.classList.add('ocultar');
	contGraf7_1.classList.remove('ocultar');
	contGraf7_2.classList.add('ocultar');
	lkovGen6_2.classList.remove('select');
	lkovGen7_1.classList.add('select');
	lkovGen7_2.classList.remove('select');
})

lkovGen7_2.addEventListener('click', function(){
	contGraf6_2.classList.add('ocultar');
	contGraf7_1.classList.add('ocultar');
	contGraf7_2.classList.remove('ocultar');
	lkovGen6_2.classList.remove('select');
	lkovGen7_1.classList.remove('select');
	lkovGen7_2.classList.add('select');
})