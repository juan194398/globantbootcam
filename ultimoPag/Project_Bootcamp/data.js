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

var zone = [
	{
		id: 1,
		name: 'Centro'
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
var propiedades = [];
function initialize(contenedor){
  unInmueble = new Property(1, 'CasaLopez', 'img', 1 , propertyType.HOUSE, operationType.SALE, detailsTypes.SIZE, {lat:111, lng: 1111}, 'Paraguay2141', true);
  contenedor.push(unInmueble);
   unInmueble = new Property(2, 'AptoLopez', 'img', 2 , propertyType.HOUSE, operationType.SALE, detailsTypes.SIZE, {lat:111, lng: 1111}, 'Paraguay2141', true);
contenedor.push(unInmueble);
}



$( document ).ready(function() {
		
		initialize(propiedades);
	  });

	  
	  function getPropiedades(){
	  return propiedades;
	
}
	  