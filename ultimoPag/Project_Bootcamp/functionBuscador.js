
function cargarPropiedadesBusquedaPorZona(zonaBusco, listadoProperty){
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
	   $(  '#' + id +'' ).on("click",function(){
		  location.href="paginaTres.html?id=" + id
	  });
	  
    }
	
	}

}

function cargarPropiedadesBusquedaPorDir(dirBusco, listadoProperty){
	for (let i = 0; i <listadoProperty.length; i++) {
		console.log(listadoProperty[i].address);
		console.log(dirBusco);
	   if(listadoProperty[i].address == dirBusco){
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
	  $(  '#' + id +'' ).on("click",function(){
		   location.href="paginaTres.html?id=" + id
	  });
	  
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

function filtrarResultado(zonaBusco, dir, pr){
	   console.log("entro a filtrarResulta");
	if(zonaBusco.length!=0 && dir.length==0){
		console.log("entro a filtrarResulta1");
		var numZona = 0;
		for (var i = 0; i < zone.length; i++) 
    {
		  
		if(zone[i].name == zonaBusco){
			numZona = zone[i].id;
			cargarPropiedadesBusquedaPorZona(numZona, pr);
		}
		
	}
	}
     else{
	     cargarPropiedadesBusquedaPorDir(dir, pr);
      }
	
}


$( document ).ready(function() {
	
	
	var pr= getPropiedades();
	console.log("viendocuantoentrolesiguelavar");	
	console.log(pr);
	var zonaBusco = GetURLParameter("zonaBusqueda");
	var dir = GetURLParameter("dir");
	filtrarResultado(zonaBusco, dir, pr);	
		
		
		
	  });