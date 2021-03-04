let existingContent = [];
let trainBin = "";


$(document).ready(function () {
getallPok();
});


function getallPok(){
var current = "";
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/336ptc.json"
               }).done(function(data) 
                  { 

                       for(let i=0; i <  pokemonNameArray.length; i++) 
                      {   
                       $("#pokList").append('<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+
                        '<img src ="' + data.PokemonTradingCenter[i].imaj + '"style=\"width:96px;\">'
                         + '<figcaption>' +data.PokemonTradingCenter[i].Name + 
                         '</figcaption>'+'</figure>'+'</div>');
                     

                         $('#'+ pokemonNameArray[i]).click(function(){
                            let currentId = $(this).attr('id');
                            //secondary(current,i,data);
                          });
      
                      }
                
                     
                    
                });
             };



function secondary(cId,i,data){
//if checked
 if ($("#" + cId +"box").prop('checked')) 
   {
  chk(cId,i,data);
$('#'+cId).removeClass('pokSelctd');
    }    
 //if not checked
   else{
  //console.log(cId);IvysaurX
   notchk(cId,i,data);
$('#'+cId).addClass('pokSelctd');
     }
}          

function secondary2(cId,i,data){
//if checked
 if ($("#" + cId +"box").prop('checked')) 
   {
  chk2(cId,i,data);
$('#'+cId).removeClass('pokSelctd');
    }    
 //if not checked
   else{
  //console.log(cId);IvysaurX
   notchk2(cId,i,data);
$('#'+cId).addClass('pokSelctd');
     }
}          


