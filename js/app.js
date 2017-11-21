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


/*Overview SCL17-2*/

var deserters = document.getElementById("deserters");
 
/*Recorro  a las alumnas dentro de la base de datos,
para saber cuantas han desertado*/

var activeStudents=[];

for (var i=0; i<data.SCL['2017-2'].students.length;i++){
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
var inactivas= document.createTextNode('Alumnas inactivas: ' + contInactivas);
var activas= document.createTextNode('Alumnas activas : ' + contActivas);
var totalTXT= document.createTextNode('Total de alumnas : ' +total);
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


	
/*Grafico 1*/

google.load("visualization", "1.0", {
	"packages": ["corechart"]
});

google.setOnLoadCallback(dibujar);

function dibujar(){

var data1 = new google.visualization.DataTable();
data1.addColumn("string", "Alumnas");
data1.addColumn("number", "Actividad");

data1.addRows(
	[
		["Activas [" + contActivas+"]",26],

		["Inactivas ["+ contInactivas+ "]",33],
    ]
);

var opciones1 = {
	title: "Alumnas Generación SCL 2017-2",
	pieHole: 0.3,
};

var grafica1 = new google.visualization.PieChart(document.getElementById("chart1"));
grafica1.draw(data1,opciones1);

}

							/**/
							
/*generacion1701*/

var deserters1701 = document.getElementById("deserters1701");

var activeStudents2 = [];

for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
	activeStudents2.push(data.SCL['2017-1'].students[i].active);
}
var contInactivas2 = 0;
var contActivas2 = 0;

for (var i = 0; i < activeStudents2.length; i++) {
	if (activeStudents2[i] == false) {
		contInactivas2++
	}
	if (activeStudents2[i] == true) {
		contActivas2++
	}
}
var total2 = contActivas2 + contInactivas2;


/*crear elementos*/
var inactivas2 = document.createTextNode('Alumnas inactivas: ' + contInactivas2);
var activas2 = document.createTextNode('Alumnas activas : ' + contActivas2);
var totalTXT2 = document.createTextNode('Total de alumnas generación : ' + total2);
var parrafo3 = document.createElement('p');
var parrafo4 = document.createElement('p');
var parrafo5 = document.createElement('p');
var gen20171 = document.createElement('div');

/*dar hijos a padres*/
parrafo3.appendChild(inactivas2);
parrafo4.appendChild(activas2);
parrafo5.appendChild(totalTXT2);
gen20171.appendChild(parrafo3);
gen20171.appendChild(parrafo4);
gen20171.appendChild(parrafo5);
deserters1701.appendChild(gen20171);
 
/*Gráfico 2*/
google.load("visualization", "1.0", {
	"packages": ["corechart"]
});

google.setOnLoadCallback(dibujar2);

function dibujar2() {

	var data2 = new google.visualization.DataTable();
	data2.addColumn("string", "Alumnas");
	data2.addColumn("number", "Actividad");

	data2.addRows(
		[
			["Activas", 14],

			["Inactivas", 9],
		]
	);

	var opciones2 = {
		title: "Alumnas",
		pieHole: 0.3,
	};

	var grafica2 = new google.visualization.PieChart(document.getElementById("chart2"));
	grafica2.draw(data2, opciones2);

}
