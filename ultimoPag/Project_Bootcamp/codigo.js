$( document ).ready(function() {
	var URLactual = window.location;
alert(URLactual);
/*CREAMOS LA CLASE INMUEBLE Y EL CONSTRUCTOR*/ 
class Property{
    constructor (id, name, image, zoneId, propertyType, operationType, details, place, address, isHighligth)
    {
        this.id = id;
        this.name = name;
        this.imge = image;
        this.zoneId = zoneId;
        this.propertyType = propertyType;
        this.operationType = operationType;
        this.details = details;
        this.place = place;
        this.address = address;
        this.isHighligth = isHighligth;
    }
}

/* CREAMOS LAS VARIABLES GLOBALES - UN ARRAY PARA LAS PROPERTYS */ 
/*Datos de prueba:*/ 
var zone = [
	{
		id: 1,
		name: 'Montevideo'
    },
    {
		id: 2,
		name: 'Malvin'
    },
    {
		id: 3,
		name: 'Pocitos'
    },
    {
		id: 4,
		name: 'Carrasco'
    },
    {
		id: 5,
		name: 'Punta carretas'
    }
];

const propertyType = {HOUSE:'Casa', APTO:'Apto', BUSINESS:'Negocio'};
const operationType = {SALE:'venta',  RENT:'renta'};
const detailsTypes = {SIZE: 'metraje'};

var propiedadesDestacadas = [
	{
		id:1,
		name:'aaa',
		images: [],
		zoneId: 1,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Paraguay 2141',
		isHighlight: true
    },
    {
		id:2,
		name:'bbb',
		images: [],
		zoneId: 2,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Legrand 1101',
		isHighlight: true
    },
    {
		id:3,
		name:'ccc',
		images: [],
		zoneId: 3,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Chucarro 1450',
		isHighlight: true
    },
    {
		id:4,
		name:'sss',
		images: [],
		zoneId: 3,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Obligado 2211',
		isHighlight: true
    }
];

var listadoProperty = [
	{
		id:1,
		name:'aaa',
		images: [],
		zoneId: 1,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Paraguay 2141',
		isHighlight: true
    },
    {
		id:2,
		name:'bbb',
		images: [],
		zoneId: 2,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Legrand 1101',
		isHighlight: true
    },
    {
		id:3,
		name:'ccc',
		images: [],
		zoneId: 3,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Chucarro 1450',
		isHighlight: true
    },
    {
		id:4,
		name:'sss',
		images: [],
		zoneId: 3,
		propertyType: propertyType.HOUSE,
		operationType: operationType.SALE,
		details: detailsTypes.SIZE,
		place: {lat:111, lng: 1111},
		address: 'Obligado 2211',
		isHighlight: true
    }
];






cargarPropiedadesDestacadas(propiedadesDestacadas);

function cargarPropiedadesDestacadas(_property){

    for (let i = 0; i < _property.length; i++) {
	const id= _property[i].id;
	const ad= _property[i].address;
	const name= _property[i].name;
	const details= _property[i].details;
      $( ".cargoDestacados" ).append('<div id=' + id +' class="publish"> </div>');
	  $(  '#' + id +'' ).append('<div class="image"> <img src="img/1.3.jpg"> </div>');
	  $(  '#' + id +'' ).append('<h4> ' + name +' </h4>');
	  $(  '#' + id +'' ).append('<h5> ' + ad +' </h5>');
	  $(  '#' + id +'' ).append('<p> ' + details +' </p>');
	  
    }

}

function cargarPropiedadesBusquedaPorZona(zonaBusco){
          console.log("entro y zonaVale", zonaBusco);
		  console.log(zonaBusco);
    for (let i = 0; i <listadoProperty.length; i++) {
	   
	   if(listadoProperty[i].zoneId == zonaBusco){
	console.log("entro al if");
	const id= listadoProperty[i].id;
	const ad= listadoProperty[i].address;
	const name= listadoProperty[i].name;
	const details= listadoProperty.details;
      $( ".listado" ).append('<div id=' + id +' class="publish"> </div>');
	  $(  '#' + id +'' ).append('<div class="image"> <img src="img/1.3.jpg"> </div>');
	  
	  $(  '#' + id +'' ).append('<div class="description"> </div>');
	  $(  '#' + id +'' ).find(".description").append('<h4> ' + name +' </h4>');
	  $(  '#' + id +'' ).find(".description").append('<h5> ' + ad +' </h5>');
	  $(  '#' + id +'' ).find(".description").append('<p> ' + details +' </p>');
	  
    }
	
	}

}





function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}


function filtrarResultado(zonaBusco, dir){
	   console.log("entro a filtrarResulta");
	if(zonaBusco.length!=0 && dir.length==0){
		console.log("entro a filtrarResulta1");
		var numZona = 0;
		for (var i = 0; i < zone.length; i++) 
    {
		  
		if(zone[i].name == zonaBusco){
			numZona = zone[i].id;
			cargarPropiedadesBusquedaPorZona(numZona);
		}
		
	}
	}
	
     else{
	
	
      }
	
}

	var city = GetURLParameter("city");
	var zonaBusco = GetURLParameter("zonaBusqueda");
	var dir = GetURLParameter("dir");
	filtrarResultado(zonaBusco, dir);
	
});



































