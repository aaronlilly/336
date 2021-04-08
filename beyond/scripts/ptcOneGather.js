
$(document).ready(function () {
       getallPok();
  });
  




function getallPok(){
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/336ptc.json"
               }).done(function(data) 
                { 
                    for(let i=0; i <  pokemonNameArray.length; i++) 
                    {  
                    	$("#pWantBody").append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+
                        '<img src ="' + data.PokemonTradingCenter[i].imaj + '"style=\"width:96px;\">'
                        + '<figcaption>' +data.PokemonTradingCenter[i].Name + 
                        '</figcaption>'+'</figure>'+'</div></div>');
                   	}
                }
            )};    