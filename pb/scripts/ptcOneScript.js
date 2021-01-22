var reGexP = [];
let existingContent = [];
let trainerNam = "";
let trainBin = "";



$(document).ready(function () {
       var COOKI = getCookieD("name");
     if (COOKI != "") {
         cNBlank(COOKI);
         let trainerNam = COOKI;
    
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
  }



///get list of bins
//if trainer name same as what is in the list of bins, get the bin for that trainer

$(document).ready(function () {
    pageLoad();
   });
 
function pageLoad() {
  let existingContent = [];
var col = '6001d6a3e31fbc3bdef42055'; 
       $.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/" + col + "/latest"
                  }).done(function(data) {
                      Eye(data, data[0].bns.length)
                   });
}
function Eye(data,x){

  //cooki testing - trainerNam;
//var trainername = "T4RYNITUP";
var trainername = "AARONAWEZOM";
for(let j=0; j <  x; j++) {

if (trainername == data[0].bns[j].tname.toUpperCase()){
gotDBin(data[0].bns[j].bin)
trainBin = data[0].bns[j].bin;
  

}}}


function gotDBin(binny){

var urlx = "https://api.jsonbin.io/b/" + binny +"/latest" ;
$.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url:urlx
                  }).done(function(data) {
    
    existingContent.push(data);
  let Owned = data.results[0].have;
  let Covet = data.results[0].want;

  if(Owned !== undefined)
      {
         $('#havPaste2').html("");
                       $('#havePaste').html("");
                for(var i = 0; i < Owned.length; i++) {
                    $('#havePaste').append("<img src='" + Owned[i].imaj +"'>");
                   $('#havPaste2').append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ data.results[0].have[i].Name    + 'own">'+ '<figure>'+
                        '<img src ="' + data.results[0].have[i].imaj + '">'
                         + '<figcaption>' + data.results[0].have[i].Name + 
                         '</figcaption>'+'</figure>'+'</div></div>')
                   $("#xboxs").append('<input type="checkbox" id="' + data.results[0].have[i].Name +'ownbox">');

                        $('#' + data.results[0].have[i].Name + "own").click(function() {
                          var currentId = $(this).attr('id');

if($("#"+currentId +"box").prop('checked'))
{
  //if checked - and uncheckit
  //alert("checked")
  $('#'+currentId).removeClass('pokRemov');

  $("#"+currentId +"box").prop('checked',false)
  //else (if its not checked) check it.
} else { 
$('#'+currentId).addClass('pokRemov');
//alert("unchecked");

  $("#"+currentId +"box").prop('checked',true)

}
                       });

                  } 

    if(Covet!== undefined){$('#wantPaste').html("");
    $('#wantPaste2').html("");
                       for(var i = 0; i < Covet.length; i++) {

                   $('#wantPaste').append("<img src='" + Covet[i].imaj +"'>");
                  $('#wantPaste2').append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ data.results[0].want[i].Name  + 'cov">'+ '<figure>'+
                        '<img src ="' +Covet[i].imaj + '">'
                         + '<figcaption>' + Covet[i].Name + 
                         '</figcaption>'+'</figure>'+'</div></div>')

                       $('#' + Covet[i].Name + "cov").click(function() {
                        var currentId = $(this).attr('id');
                               ///////this console.log(data.results[0].want[0].Dex)

if($("#"+currentId  +"box").prop('checked'))
{
  //if checked - and uncheckit
  //alert("checked")
  $('#'+currentId ).removeClass('pokRemov');

  $("#"+currentId  +"box").prop('checked',false)
  //else (if its not checked) check it.
} else { 
$('#'+currentId ).addClass('pokRemov');
//alert("unchecked");

  $("#"+currentId  +"box").prop('checked',true)

  ///
  var pDex = data.results[0].want[0].Dex;
var pName = data.results[0].want[0].Name;
var pReg = data.results[0].want[0].Region;
var pType1 = data.results[0].want[0].Type1;
var pType2 = data.results[0].want[0].Type2;
var pImj = data.results[0].want[0].imaj;
var dC = data.results[0].want[0].datecaught;
var pNotes = data.results[0].want[0].notes;
var pPur = data.results[0].want[0].purified;
var pShiny = data.results[0].want[0].shiny;

     RwantP.push({"Dex" :pDex, "Name" : pName, "Type1" : pType1, "Type2" : pType2, "imaj" : pImj, "Region" :pReg, "shiny" :pShiny,"datecaught" : dC, "notes": pNotes})
    
    
    

}
                       });

     $("#xboxs").append('<input type="checkbox" id="' + Covet[i].Name +'covbox">');

                  } 
                  }   
   
      };
});
}



////first toast -menu click
$(document).ready(function() {
      toastR();

      $('#menYou').click(function() {
       toastR();
         });
});

function toastR(){

toastr.options = {
 "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

toastr["success"]('<span style="margin-right:20%; font-size:10px;">Menu </span> <div id="toastTop">User Options :</div><div id="myList"> My List - <span id ="myListBtns" style="margin-bottom:2%;">  <button type="button" class="btn btn-info" id="AddSaved">Add</button>  <button type="button" class="btn btn-danger" id="RemoveSaved">Remove</button> <button type="button" class="btn btn-warning" id="ViewSaved" style="margin-top:2%;">View</button>   <button type="button" class="btn btn-secondary" id="ShareSaved" style="margin-top:2%;">Share</button>  <button type="button" class="btn btn-primary" id="Advanced" style="margin-top:2%;">Advanced</button></span> </div> <hr style="border: 2px solid blue; border-radius: 5px;"> <div id="otherZ">Other Trainers -  <span id ="othersBtns"> <button type="button" class="btn btn-light" id="trainNam" style="margin-top:2%;" > Search</button> </div> <hr style="border: 2px solid white; border-radius: 5px;"><div> Save Data  -  <button type="button" id="dbSend" class="btn btn-dark">Save Lists</button></div> <div id ="endOfToast"></div>')
//<input type="text" id="TrainerInput" placeholder="Search By">
 $('#clearly').click(function() {
               toastr.remove();        
               $("#menubox").prop('checked',false);
                })
      toastr.options.onHidden = function(){ $("#menubox").prop('checked',false)}; 
 $('.toast-close-button').click(function() { $("#menubox").prop('checked',false);});
    $('#AddSaved').click(function() {
                       getallPok();
                       $('#subtractionAl').css({'display':'none'});
                       $('.ViewAll').css({'display':'none'});

    $('#additionAl').css({
        'height': '200px',
        'width': '320px',
        'border': 'solid',
        'border-color':'#17A2B8',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'left',
        'margin-right':'2%',
        'display':'block'
    });
      });
     $('#RemoveSaved').click(function() {
      $('#additionAl').css({'display':'none'});
      $('.ViewAll').css({'display':'none'});
                      $('#subtractionAl').css({
        'height': '200px',
        'width': '320px',
        'border': 'solid',
        'border-color':'#DC3545',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'right',
        'margin-left':'2%',
        'display':'block'
    });
      })
     $('#ViewSaved').click(function() {
                       $('#subtractionAl').css({'display':'none'});
                       $('#additionAl').css({'display':'none'});
                        $('.ViewAll').css({
        'display':'block'
    });

      })
     $('#ShareSaved').click(function() {
                       // $('#topper').append(this.id)
                       // rePaint();
      })
     $('#Advanced').click(function() {
                       // $('#topper').append(this.id)
                       // rePaint();
      })
     $('#trainNam').click(function() {
                       // $('#topper').append(this.id)
                       // rePaint();
      })
    $('#dbSend').click(function() {
          send2();
       });

  }

function rePaint(){ $('#topper').hide();
$('#topper').get(0).offsetHeight;
$('#topper').show();};

////end first toast -menu click



///add click within menu

//get all pokemon available
function getallPok(){
var current = "";
$("#pokHav").html("");
                  $("#pokWan").html("");
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/336ptc.json"
               }).done(function(data) 
                  { 

                      for(let i=0; i <  pokemonNameArray.length; i++) 
                      {   
                       $("#pokHav").append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+
                        '<img src ="' + data.PokemonTradingCenter[i].imaj + '">'
                         + '<figcaption>' +data.PokemonTradingCenter[i].Name + 
                         '</figcaption>'+'</figure>'+'</div></div>');
                     
                         $("#pokWan").append( '<div class="col-sm-3">' +'<div class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + 'x">'+ '<figure>'+
                        '<img src ="' + data.PokemonTradingCenter[i].imaj + '">'
                         + '<figcaption>' +data.PokemonTradingCenter[i].Name + 
                         '</figcaption>'+'</figure>'+'</div></div>');


                         $('#'+ pokemonNameArray[i]).click(function(){
                            var currentId = $(this).attr('id');
                            let current = currentId;
                        secondary(current,i,data);
                          });
      
      $('#'+ pokemonNameArray[i]+'x').click(function(){
      
                            var currentId = $(this).attr('id');
                            let current = currentId;
    //console.log(current); Ivysaurx
                        secondary2(current,i,data);
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


///end add click menu


///selection click form addby box


///////////add- 
$(document).ready(function () {
    $('#DexNumAdd').click(function() {
      $('.addMenuUp').html("");
  $('.addMenuUp').append("This Feature Coming soon");
});
 $('#PokNamAdd').click(function() {
      $('.addMenuUp').html("");
  $('.addMenuUp').append("This Feature Coming soon");

});

 $('#selectAdd').click(function() {
      $('.addMenuUp').html("");
   $('#selClick').css({'display':'block'});
$('#additionAl').css({
'display':'block',
'width':'315px',
'border': 'solid',
'border-color': '#17A2B8',
'border-radius': '5%',
'border-width':'thin',
'display':'block',
'float':'left',
'margin-right':'2%',
'height': 'auto'}
);
});
 
});
//end selection click form addbybox



//save from modal
function saveSelected(){

for(var i = 0; i < haveP.length; i++){
existingContent[0].results[0].have.push(haveP[i])}


// push this to api
alert2();
deSelectUnchk();
$('#myModal1').modal('hide');

}


function saveSelected2(){

for(var i = 0; i < wantP.length; i++){
existingContent[0].results[0].want.push(wantP[i])}


// push this to api
alert2();
deSelectUnchk2();
$('#myModal2').modal('hide');

}



//end save selected modal /have
function cancelHave(){
deSelectUnchk()
$("#haveX").prop('checked',false)
}

///deselect what u selected in modal
function deSelectUnchk() {

  for(var i=0; i <  pokemonNameArray.length; i++) 
   {
     if ($("#" + pokemonNameArray[i] +"box").prop('checked'))
     {
      $("#" + pokemonNameArray[i] +"box").prop('checked',false);
     $('#'+pokemonNameArray[i]).removeClass('pokSelctd');
     }
     let haveP = [];
         }
}



function cancelWant(){
deSelectUnchk2()
$("#wantX").prop('checked',false)
}

///deselect what u selected in modal
function deSelectUnchk2() {

  for(var i=0; i <  pokemonNameArray.length; i++) 
   {
     if ($("#" + pokemonNameArray[i] +"xbox").prop('checked'))
     {
      $("#" + pokemonNameArray[i] +"xbox").prop('checked',false);
     $('#'+pokemonNameArray[i]+"x").removeClass('pokSelctd');
     }
     let wantP = [];
         }
}


//end deselect for have. 



///alert2

function alert2(){
  toastr.options = {
 "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "100",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
toastr["info"]('Pokemon Saved')
}
////////end stuff

function send2(){
if(existingContent[0] !== undefined)
  {send2a();} else{alert("Allow a few more seconds for this feature to work...")}
}

function send2a(){
if(existingContent[0].results[0].have[0] === undefined){
alert("Add Pokemon to 'have' list.");
}else if(existingContent[0].results[0].have[0] !== undefined) {
   send2b();
  
}
}

function send2b(){
  if(existingContent[0].results[0].want[0] !== undefined){
   send3();
}else{
  alert("Add Pokemon to 'want' list.")
}
}


function send3(){
  //console.log(existingContent);
  $.ajax
       ({
           url: "https://api.jsonbin.io/b/" + $.trim(trainBin), 
          method: "PUT",
  versioning: false,
          beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  
                 data: JSON.stringify(existingContent[0]),
                  }).done(function(responseText) 
                     {
                      console.log(responseText)
      toastyFunct();
      ;                 
    });

}


function toastyFunct(){
  pageLoad();
  alert("sent")}
  ;
/////end of 



//check boxset up
$(document).ready(function() {
for(var i=0; i <  pokemonNameArray.length; i++) 
   {
     $("#xboxs").append('<input type="checkbox" id="' + pokemonNameArray[i] +'box">');
//want
 $("#xboxs").append('<input type="checkbox" id="' + pokemonNameArray[i] +'xbox">');

    }
});



$(document).ready(function() {
for(var i=0; i <  pokemonNameArray.length; i++) 
   {
     $("#xboxs").append('<input type="checkbox" id="' + pokemonNameArray[i] +'box">');
    }
});
//end check box


///needed for initial paste of current pokemon list

function rePainterWant(){ 
$('#wantPaste').hide();
$('#wantPaste').get(0).offsetHeight;
$('#wantPaste').show();

};
function rePainterHave(){ 
$('#havePaste').hide();
$('#havePaste').get(0).offsetHeight;
$('#havePaste').show();

};
///end current list paste

//add paste
function rePaint(){ $('#topper').hide();
$('#topper').get(0).offsetHeight;
$('#topper').show();};

$(document).ready(function () {
    $('#hideAdd').click(function() {
    $('#additionAl').css({
        'height': '200px',
        'width': '300',
        'border': 'solid',
        'border-color':'#17A2B8',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'left',
        'margin-right':'2%',
        'display':'none'
    });

      $('.addMenuUp').html("");
      $('#selClick').css({'display':'none'});
      });

       $('#hideSubtract').click(function() {
    $('#subtractionAl').css({
        'height': '200px',
        'width': '300',
        'border': 'solid',
        'border-color':'#17A2B8',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'right',
        'margin-left':'2%',
        'display':'none'
    });
      });
});
///end add paste



//checknotheck
function chk(cId,i,data){

var pName = data.PokemonTradingCenter[i].Name;

///keep em seperate//this removes from array and uncecks
    $("#" + cId +"box").prop('checked',false)

     if($("#havX").prop('checked',true))
        {
          for (j = 0; j < haveP.length; j++) 
          {
             if(haveP[j].Name == pName)
              {
                haveP.splice(j,1);
              }
          }
        }
      
        }

function chk2(cId,i,data){

var pName = data.PokemonTradingCenter[i].Name;

///keep em seperate//this removes from array and uncecks
    $("#" + cId +"box").prop('checked',false)

     if($("#wantX").prop('checked',true))
        {
          for (j = 0; j < wantP.length; j++) 
          {
             if(wantP[j].Name == pName)
              {
                wantP.splice(j,1);
              }
          }
        }
      
        }

function notchk(cId,x,data){
var pDex = data.PokemonTradingCenter[x].Dex;
var pName = data.PokemonTradingCenter[x].Name;
var pReg = data.PokemonTradingCenter[x].Region;
var pType1 = data.PokemonTradingCenter[x].Type1;
var pType2 = data.PokemonTradingCenter[x].Type2;
var pImj = data.PokemonTradingCenter[x].imaj;
var dC = data.PokemonTradingCenter[x].datecaught;
var pNotes = data.PokemonTradingCenter[x].notes;
var pPur = data.PokemonTradingCenter[x].purified;
var pShiny = data.PokemonTradingCenter[x].shiny;

     haveP.push({"Dex" :pDex, "Name" : pName, "Type1" : pType1, "Type2" : pType2, "imaj" : pImj, "Region" :pReg, "shiny" :pShiny,"datecaught" : dC, "notes": pNotes})
     $("#" + cId +"box").prop('checked',true);
    
    
}

function notchk2(cId,x,data){
var pDex = data.PokemonTradingCenter[x].Dex;
var pName = data.PokemonTradingCenter[x].Name;
var pReg = data.PokemonTradingCenter[x].Region;
var pType1 = data.PokemonTradingCenter[x].Type1;
var pType2 = data.PokemonTradingCenter[x].Type2;
var pImj = data.PokemonTradingCenter[x].imaj;
var dC = data.PokemonTradingCenter[x].datecaught;
var pNotes = data.PokemonTradingCenter[x].notes;
var pPur = data.PokemonTradingCenter[x].purified;
var pShiny = data.PokemonTradingCenter[x].shiny;

 
    //console.log(cId);
     wantP.push({"Dex" :pDex, "Name" : pName, "Type1" : pType1, "Type2" : pType2, "imaj" : pImj, "Region" :pReg, "shiny" :pShiny,"datecaught" : dC, "notes": pNotes})
    $("#" + cId +"box").prop('checked',true);
    }

//end checknotcheck


///////////add- 
$(document).ready(function () {
 $('#selectSub').click(function() {
      // $('.addMenuUp').html("");
   $('#subClick').css({'display':'block'});
$('#subtractionAl').css({
'display':'block',
'width':'315px',
'border': 'solid',
'border-color': '#17A2B8',
'border-radius': '5%',
'border-width':'thin',
'display':'block',
'float':'right',
'margin-right':'2%',
'height': 'auto'}
);
});
 
});
//end selection click form addbybox


$(document).ready(function () {
$('#havi').click(function() {
  checkThis("haveX");


});
  $('#wanti').click(function() {
  checkThis("wantX");
 
});
});




function checkThis(curMenu){
//if checked
 if ($("#" + curMenu).prop('checked')) 
   {
  chkThis(curMenu);

    }    
 //if not checked
  else{
  notchkThis(curMenu);

    }
}  





function chkThis(curMenu){ 
$("#" + curMenu).prop('checked',false)}

function notchkThis(curMenu){$("#" + curMenu).prop('checked',true);}




