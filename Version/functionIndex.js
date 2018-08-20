


function loadPropertiesHighlighted(properties){
          for (let i = 0; i < properties.length; i++) {
                      let id= properties[i].id;
                      let route= properties[i].images[0].name;
                      $( "#propiedadesDestacadas" ).append('<div id=' + id +'> </div>');
	                  $(  '#' + id +'' ).append('<img src="'+route+'">');
	                  $(  '#' + id +'' ).on("click",function(){
		             location.href="paginaTres.html?id=" + id
	                  });

                 }

}

function traigo(){
fetch('http://localhost:3000/properties?highlighted=true')
            .then((response) => response.json())
            .then((properties) => {
            	loadPropertiesHighlighted(properties);
            })};


$( document ).ready(function() {
		
	traigo();

				
	  });