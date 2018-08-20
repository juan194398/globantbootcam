
function loadProperties(properties){
  for (let i = 0; i <properties.length; i++) {
      $( ".listado" ).append('<div id=' + properties[i].id +' class="publish"> </div>');
	  $(  '#' + properties[i].id +'' ).append('<div class="image"> <img src=' + properties[i].images[0].name +'> </div>');
	  $(  '#' + properties[i].id +'' ).append('<div class="description"> </div>');
	  $(  '#' + properties[i].id +'' ).find(".description").append('<h4> ' + properties[i].name +' </h4>');
	  $(  '#' + properties[i].id +'' ).find(".description").append('<h5> ' + properties[i].address +' </h5>');
	  $(  '#' + properties[i].id +'' ).find(".description").append('<p> ' + properties[i].details +' </p>');
	  $(  '#' + properties[i].id +'' ).on("click",function(){
		   location.href="paginaTres.html?id=" + properties[i].id
	  });
	}
}

function searchIdZone(zoneName){
	return fetch('http://localhost:3000/zone?name='+ zoneName +'')
            .then((response) => response.json())
            .then((zona) => {
            	return zona[0].id;
            })
}

function searchPropertiesByAddress(address){
	fetch('http://localhost:3000/properties?address='+ address +'')
            .then((response) => response.json())
            .then((properties) => {
            	loadProperties(properties);
            })
}

function searchPropertiesByZone(zoneName){
	let m= searchIdZone(zoneName);
    let n= 1;
    m.then(result=>{ // using .all to wait for all promises to get resolved
    fetch('http://localhost:3000/properties?zoneId='+ result +'')
            .then((response) => response.json())
            .then((properties) => {
            	loadProperties(properties);
            })
  });
	
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

function filtrarResultado(zoneName, address){
	if(zoneName.length!=0 && address.length==0){
		searchPropertiesByZone(zoneName);
	}
     else{
     	searchPropertiesByAddress(address);
      }
	
}


$( document ).ready(function() {
	var zoneName = GetURLParameter("zonaBusqueda");
	var address = GetURLParameter("dir");
	filtrarResultado(zoneName, address);		
	  });