
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
                      //pwant
                    	$("#pWantBody").append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+
                        '<img src ="' + data.PokemonTradingCenter[i].imaj + '"style=\"width:96px;\">'
                        + '<figcaption>' +data.PokemonTradingCenter[i].Name + 
                        '</figcaption>'+'</figure>'+'</div></div>');

                        //chx box
                      $("#xboxs").append('<input type="checkbox" id="' + pokemonNameArray[i] +'box">');


                         //want click
                      $('#'+ pokemonNameArray[i]).click(function() {
                         var cId = $(this).attr('id');
                          var text = "want"
                         pokClick(cId,i,data,text)
                         

                      });
                      //end pwant

                      //phave
                      $("#pHaveBody").append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + "H" +'">'+ '<figure>'+
                        '<img src ="' + data.PokemonTradingCenter[i].imaj  +'"style=\"width:96px;\">'
                        + '<figcaption>' + data.PokemonTradingCenter[i].Name + 
                        '</figcaption>'+'</figure>'+'</div></div>');

                        //chx box 
                       $("#xboxs").append('<input type="checkbox" id="' + pokemonNameArray[i]+"H" +'box">');
                      //end phave

                      
                      //have click
                      $('#'+ pokemonNameArray[i]+"H").click(function() {
                         var cId = $(this).attr('id');
                         var text = "have"
                         pokClick(cId,i,data,text)
                         

                      });
                      //end have click 

                     

                   	}
                }
            )};    