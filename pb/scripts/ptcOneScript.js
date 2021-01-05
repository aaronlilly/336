var reGexP = [];

$(document).ready(function () {
			 var COOKI = getCookieD("name");
		 if (COOKI != "") {
         cNBlank(COOKI);
    
      }		 
	});
	
	function cNBlank(COOKI){
    if(COOKI !== undefined){
    $('#trainerInfoHere').html(COOKI);
      regentFunction();
    }
  }
  function getCookieD(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


	function regentFunction() {
    var C00KI = getCookieD("regentName");
    reGexP.push(C00KI);
    //console.log(C00KI);
  }


$(document).ready(function() {
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/336ptc.json"
               }).done(function(data) 
                  {
                   
                     for(var i=0; i <  pokemonNameArray.length; i++) 
                      {   
                        //working
                       $("#pokHav").append('<span class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+'<img src ="' + data.PokemonTradingCenter[i].imaj + '">' + '<figcaption>' +data.PokemonTradingCenter[i].Name + '</figcaption>'+'</figure>'+'</span>');

                      $('#'+ pokemonNameArray[i]).click(function(){
                        secondary(this.id,i);
                      });
                    }

                });
      });

///
function chk(cId,i){

var pDex = data.PokemonTradingCenter[i].Dex;
var pName = data.PokemonTradingCenter[i].Name;
var pReg = data.PokemonTradingCenter[i].Region;
var pType1 = data.PokemonTradingCenter[i].Type1;
var pType2 = data.PokemonTradingCenter[i].Type2;
var pImj = data.PokemonTradingCenter[i].imaj;
var dC = data.PokemonTradingCenter[i].datecaught;
var pNotes = data.PokemonTradingCenter[i].notes;
var pPur = data.PokemonTradingCenter[i].purified;
var pShiny = data.PokemonTradingCenter[i].shiny;



 // $("#" + current +"span").html("");
    $("#" + cId +"box").prop('checked',false)
    
//   let cur = current;
//   //alert(cur);

//     for (j = 0; j < wantP.length; j++) {
  
//       if(wantP[j].Name == cur){

//         wantP.splice(j,1);}
// }
}
function notchk(cId,i){
var pDex = data.PokemonTradingCenter[i].Dex;
var pName = data.PokemonTradingCenter[i].Name;
var pReg = data.PokemonTradingCenter[i].Region;
var pType1 = data.PokemonTradingCenter[i].Type1;
var pType2 = data.PokemonTradingCenter[i].Type2;
var pImj = data.PokemonTradingCenter[i].imaj;
var dC = data.PokemonTradingCenter[i].datecaught;
var pNotes = data.PokemonTradingCenter[i].notes;
var pPur = data.PokemonTradingCenter[i].purified;
var pShiny = data.PokemonTradingCenter[i].shiny;

// $("#append").append("<span id ='" + current + "span'></span>"); 
//     $("#" + current +"span").append(current + "\t"); 
    $("#" + cId +"box").prop('checked',true);
  // wantP.push({"Name" : pName, "Type" : pType});
  // {"tname": tNam,"bin": bin}
}



/////

function secondary(cId,i){
 //console.log(cId);

//if checked
 if ($("#" + cId +"box").prop('checked')) 
   {
  chk(cId,i);
    }
    
 //if not checked
   else{
   notchk(cId,i);
     }
}          

   $(document).ready(function() {
for(var i=0; i <  pokemonNameArray.length; i++) 
                      {
                        $("#xboxs").append('<input type="checkbox" id="' + pokemonNameArray[i] +'box">');
                      }
});