function pokClick(id,i,data,text)
{

 //if checked
 if ($("#" + id +"box").prop('checked')) 
   {
    check(id,i,data,text);
    $("#" + id +"box").prop('checked',false)
    $('#'+id).removeClass('pokSelctd');
   }    
  
 //if not checked
  else
  {
     $('#'+id).addClass('pokSelctd');
   notcheck(id,i,data,text);
 
   
  }     
}



//this function runs if the above checked is true
function check(id,i,data,text){
  if(text == "have"){

  }

}

//this function runs if the above checked is not true (else)
function notcheck(id,i,data,text)
{
  if(text == "have"){
  
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

    haveP.push({"Dex" :pDex, "Name" : pName, "Type1" : pType1, "Type2" : pType2, "imaj" : pImj, "Region" :pReg, "shiny" :pShiny,"purified":pPur,"datecaught" : dC, "notes": pNotes})
    
    $("#" + id +"box").prop('checked',true);
  }

}