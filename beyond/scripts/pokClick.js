
$(document).ready(function () {
    

     $('#Bulbasaur').click(function() {
       alert("hi")
         });

        for(let i=0; i <  pokemonNameArray.length; i++) 
                    { 
                       var currentId = $(this).attr('id');
                      
                     /* $('#'+ pokemonNameArray[i]+"H").click(function() {
                          alert(currentId);

                        });*/

                      // $('#'+ pokemonNameArray[i]).click(function() {
                      //     alert(currentId + "non");

                      //   });
                    }
                      
});
  



