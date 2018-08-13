
function cargarPropiedadesDestacadas(_property){

    for (let i = 0; i < _property.length; i++) {
	if(_property[i].isHighligth== true){
	const id= _property[i].id;
	const ad= _property[i].address;
	const name= _property[i].name;
	const details= _property[i].details;
      $( ".cargoDestacados" ).append('<div id=' + id +' class="publish"> </div>');
	  $(  '#' + id +'' ).append('<div class="image"> <img src="img/1.3.jpg"> </div>');
	  $(  '#' + id +'' ).append('<div class="description"> </div>');
	  $(  '#' + id +'' ).find(".description").append('<h4> ' + name +' </h4>');
	  $(  '#' + id +'' ).find(".description").append('<h5> ' + ad +' </h5>');
	  $(  '#' + id +'' ).find(".description").append('<p> ' + details +' </p>');
	  
	  
    }
    }
}


$( document ).ready(function() {
	
	
	var pr= getPropiedades();
	cargarPropiedadesDestacadas(pr);	

		
		
	  });