
$(document).ready(function () {
       getallPok();
  });
  




function getallPok(){
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/arstops/scripts/Demo.json"
               }).done(function(data) 
                { 

                  $("#pWantBody").append("<u> Stop Name</u> "+ " " + "<u> NearStreet</u> " + " " + "<u> Area</u> " +" <br>");

                 
                    for(let i=0; i < data.ArStops.length; i++) 
                    {  
                    	$("#pWantBody").append(data.ArStops[i].Name +" " + data.ArStops[i].NearStreet + " " + data.ArStops[i].Area  );
                   	}
                }
            )};    


               //<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        // + '">'+ '<figure>'+
                        // '<img src ="' + data.PokemonTradingCenter[i].imaj + '"style=\"width:96px;\">'
                        // + '<figcaption>' +data.PokemonTradingCenter[i].Name + 
                        // '</figcaption>'+'</figure>'+'</div></div>'