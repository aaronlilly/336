   $(document).ready(function() {
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/336ptc.json"
               }).done(function(data) 
                  {
                     for(var i=0; i <  pokemonNameArray.length; i++) 
                      {   
                        //working
                       $("#pokemonList").append('<span class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+'<img src ="' +data.PokemonTradingCenter[i].imaj + '">' + '<figcaption>' +data.PokemonTradingCenter[i].Name + '</figcaption>'+'</figure>'+'</span>');

                      $('#'+ pokemonNameArray[i]).click(function(){
                        secondary(this.id,i);
                      });
                    }

                });
      });
