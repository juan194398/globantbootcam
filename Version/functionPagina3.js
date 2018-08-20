
function loadProperties(property){
  for (let i = 1; i <4; i++) {
     
      $( ".slider ul" ).append('<li> <img src=' + property.images[i].name +'> </li>');
	}
}

function searchPropertiesById(idPropierty){
	fetch('http://localhost:3000/properties?id='+ idPropierty +'')
            .then((response) => response.json())
            .then((properties) => {
                loadProperties(properties);
            })
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

function filtrarResultadoId(idPropierty){
	if(idPropierty.length!=0){
		searchPropertiesById(idPropierty);
	}
    
}


$( document ).ready(function() {
	var idPropierty = GetURLParameter("id");
	filtrarResultadoId(idPropierty);		
	  });