var reGexP = [];
var dataX = [];


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
  }


$(document).ready(function() {
  $('#getList').click(function(){
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/336ptc.json"
               }).done(function(data) 
                  {
                   
                     for(var i=0; i <  pokemonNameArray.length; i++) 
                      {   
                        //working
                       $("#pokHav").append( '<div class="col-sm-2">' +'<span class="imjs"'+ 'id="'+ pokemonNameArray[i]
                        + '">'+ '<figure>'+'<img src ="' + data.PokemonTradingCenter[i].imaj + '">' + '<figcaption>' +data.PokemonTradingCenter[i].Name + '</figcaption>'+'</figure>'+'</span></div>');

                      $('#'+ pokemonNameArray[i]).click(function(){
                        secondary(this.id,i);
                      });
                    }

                });
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


//////////
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


$(document).ready(function() {
      toastR();


 
  

      $('#menYou').click(function() {
   //      if ($("#menubox").prop('checked')) 
   // {
 
   //  }
     // else{
       toastR();
     //    $("#menubox").prop('checked',true);
     // }
       
         });
              });

function toastR(){
toastr["success"]('<span style="margin-right:20%; font-size:10px;">Menu </span> <div id="toastTop">User Options :</div><div id="myList"> My List - <span id ="myListBtns" style="margin-bottom:2%;">  <button type="button" class="btn btn-info" id="AddSaved">Add</button>  <button type="button" class="btn btn-danger" id="RemoveSaved">Remove</button> <button type="button" class="btn btn-warning" id="ViewSaved" style="margin-top:2%;">View</button>   <button type="button" class="btn btn-secondary" id="ShareSaved" style="margin-top:2%;">Share</button>  <button type="button" class="btn btn-primary" id="Advanced" style="margin-top:2%;">Advanced</button></span> </div> <hr style="border: 2px solid blue; border-radius: 5px;"> <div id="otherZ">Other Trainers - <input type="text" id="TrainerInput" placeholder="Search By"> <span id ="othersBtns"><button type="button" class="btn btn-light" id="trainNam" style="margin-top:2%;" > Trainer Name</button> </div> <div id ="endOfToast"></div>')
  //<button type="button" class="btn btn-dark" id="clearly">Close</button></div>')//'<button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>
      $('#clearly').click(function() {
               toastr.remove();        
               $("#menubox").prop('checked',false);
                })
      toastr.options.onHidden = function(){ $("#menubox").prop('checked',false)}; 
 $('.toast-close-button').click(function() { $("#menubox").prop('checked',false);});
      //myFunction(this.id);

    $('#AddSaved').click(function() {
                       // $('#topper').append(this.id)
                       // rePaint();
                       $('#subtractionAl').css({'display':'none'});
                       $('.ViewAll').css({'display':'none'});
    $('#additionAl').css({
        'height': '200px',
        'width': '275px',
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
        'width': '275px',
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
                       getHaveWant();
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
  }

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


/////


//want have
function getHaveWant(){


	var COOKI2 = getCookieD("name");
		 if (COOKI2 != "") {
         cNBlank2(COOKI2);
    
      }		 
	
	
	function cNBlank2(COOKI2){
    if(COOKI2 !== undefined){
    
	var trainerName = COOKI2;
	
    }
  }


    { //var col = '5feb2676f801050e4f31f1ba';
     //var col = '5ffad00955b359028dbd2a0e'; 
var col = '5ffcb6a1f98f6e35d5fb3e0d'; 
       $.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/" + col + "/latest"
                  }).done(function(data) 
                     {
                      
                      if (dataX == []){
                      dataX.push(data); ;
                    }else {
                      dataX = [];
                        dataX.push(data);
                    }

		console.log(dataX);
		//console.log(dataX[0].results[0].trainer);

		
		//console.log(trainerName);
			console.log(dataX[0].results[0].have)

                         $('#havePaste').html("");
                          $('#wantPaste').html("");

                           for(var i = 0; i < dataX[0].results[0].have.length; i++) {
                    $('#havePaste').html("<img src='" + dataX[0].results[0].have[i].imaj +"'>");
                   }rePainter();
                    //console.log(dataX[0].AaronAwezom.Have[0].Name)

                      

                      for(var i = 0; i < dataX[0].results[0].have.length; i++) {
                     $('#wantPaste').html("<img src='" + dataX[0].results[0].want[i].imaj +"'>");
                   }rePainter1();
                    
    });

}
}

// label.push(data);
// ;

function rePainter(){ 
$('#wantPaste').hide();
$('#wantPaste').get(0).offsetHeight;
$('#wantPaste').show();

};

function rePainter1(){ 
$('#havePaste').hide();
$('#havePaste').get(0).offsetHeight;
$('#havePaste').show();

};
