var label = [];
var upLabel = [];
var labelTname = [];
let binArray = [];
var resp = [];
var resp2 = [];
var col = '600cd1c7bca934583e40dc83';
var c0l = '600cd7113126bb747e9e2252';
let binlabel =[];



// get bins from list of bins, put them in array //this is correct
 $(document).ready(function ()  
    {
       $.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/" + col + "/latest"
                  }).done(function(data) 
                     {
                      //console.log(data)     
                       next(data);
    });
});

function next(data){
label.push(data);

//take just the names out of the array and put them in another array
  for(i= 0; i < label[0][0].bns.length;i++){
labelTname.push(label[0][0].bns[i].tname.toUpperCase())
}
nekt();
}

function nekt()
{
       $.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/" + c0l + "/latest"
                  }).done(function(data) 
                     {
                      //console.log(data)     
                       nect(data);
    });
}

function nect(data){
binArray.push(data[0])
}



///end infoget
/////////////login/newclick

//create new click if same/different
function IsSameNew(){
alert("user name already exists,\nchose another name or login.");
}

 //add the bin created to the list of bins
 function IsDifferentNew(){

//newBin();
createNewAccount();

}
//end bin list add
//end createclick

///////////////is same is different funcitons
//login
function IsSame(){
  checkTheBin();
//log in funciton here
}

function IsDifferent(){
  alert(" no account found with user name,\nchose another name or create new                                                                                                                                                                                             .");
}
//end new

//new
function checkItNew()
{
var tNam = $('#username').val().toUpperCase();
        if(labelTname.includes(tNam))
        {
            IsSameNew();
        }else {
                IsDifferentNew();
              }           
    };

//login
function checkIt()
{
var tNam = $('#username').val().toUpperCase();
  //bins[0].bns.includes(name)
        if(labelTname.includes(tNam))
        {
            IsSame();
        }else {
                IsDifferent();
              }           
    };

///////////////////////////////////////////////////////////end -is same is different- functions



///////////click events for buttons 
$(document).ready(function() {
$('#logIn').click(function(){
checkIt()

});
});


$(document).ready(function() {
$('#createNew').click(function(){
checkItNew()
var name = $("#username").val()
 // i dont know what 1042 $("#usernaem").val(name);

});
});
//////end click events for buttons


//creates bin in collection of bins (not a collection now)
function newBin(){
      
       $.ajax
       ({
          url: "https://api.jsonbin.io/b/",    
         method: "POST",
  //collection-id: myCol,
         beforeSend: function (xhr) {
          //xhr.setRequestHeader("collection-id", myCol);
               xhr.setRequestHeader("Content-Type", "application/json");
               xhr.setRequestHeader("secret-key", mySecretKey);
              },
                  
                 data:'{"results": [{"trainer": "' + $('#username').val() +'","have": [],"want": []}]}',
                  }).done(function(responseText) 
                     {
           updateListFunct(responseText)
                      //console.log(responseText);                 
    });
 };
//updates list of trainers and bins with bin and trainer name
//need to push data into array from response along with trainer name
//then read out of array with json stringify //also seemingly good

function updateListFunct(responseText){
resp.push(responseText);
upLabel.push(label[0][0]);
var trainerName = $('#username').val().toUpperCase();
var createdBin = resp[0].id;

upLabel[0].bns.push({"tname": trainerName,"bin": createdBin});


 $.ajax
       ({
           url: "https://api.jsonbin.io/b/" + col, 
          method: "PUT",
  versioning: false,
          beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  
                 data: JSON.stringify(upLabel),
                  }).done(function(responseText) 
                     {
                      //console.log(responseText)
      toastyFunct();
      ;                 
    });

 }

function toastyFunct(){

var username = $("#username").val();
	  var usernane = $("#uesrname").val();
      
                   $.ajax
                  ({
                    url: "https://api.jsonbin.io/b/",    
         method: "POST",
         beforeSend: function (xhr) {
               xhr.setRequestHeader("Content-Type", "application/json");
               xhr.setRequestHeader("secret-key", mySecretKey);
              },
                  
                  data:'[{"bns":[{"tname":"' + username.toUpperCase() + '","bin":"'+ window.btoa(usernane) +'"}]}]',
              
                 //data:'{"results": [{"trainer": "' + $('#username').val() +'","have": [],"want": []}]}',
                  }).done(function(responseText) 
                     {
           //updateListFunct(responseText)
                         

                        updateListFunt(responseText.id)

                      //{success: true, data: Array(1), id: "...", private: true}
                                   
    });

alert("new account created!");


//window.location.href = "./ptcOne.html";

}


function updateListFunt(responseTextId){
 var username = $("#username").val().toUpperCase();
var data2send = {tname: username , bin: responseTextId};
binArray[0].bns.push(data2send)
//console.log(binArray);
 $.ajax
        ({
            url: "https://api.jsonbin.io/b/" + c0l, 
          method: "PUT",
   versioning: false,
         beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
                 xhr.setRequestHeader("secret-key", mySecretKey);
                },                 
		data: JSON.stringify(binArray),
                   }).done(function(responseText) 
                     {alert("now log in with username and password")
                      window.location.href = "./ptc.html";
     });

 }


function createNewAccount() {
$('.log-form').addClass('hidd');
$('.log-form2').removeClass('hidd');
}



$(document).ready(function() {

$('#createNewNow').click(function(){


newBin();
});
});


/////

  //get bins
 
  //check if username matches
  //ifit does get that bin
  //check if bin number matches
  //if it does, continue....


function checkTheBin(){

var colly = '600cd7113126bb747e9e2252'

 $.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/" + colly + "/latest"
                  }).done(function(data) 
                     {
                      //console.log(data)     
                      //next
                      //binlabel.push(data);
                     

                      //console.log(data[0].bns[0].tname)
                            //for 
                            for(i= 0; i < data[0].bns.length;i++){
                      if ($('#username').val().toUpperCase() == data[0].bns[i].tname.toUpperCase()){
                        //check other
                              binD(data[0].bns[i].bin,data[0].bns[i].tname);
                                     
                                        }
                                                           }
    });

function binD(dataz,datas){

$.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/" + dataz + "/latest"
                  }).done(function(data){
                    //console.log(datas);
                    //console.log(data)
                    if ($('#username').val().toUpperCase() == datas.toUpperCase()){
                        
                              binO(data[0].bns[0].bin);
                                     
                                        }
                                               
                  }
                  )}
                };

function binO(data2){

     if (window.btoa($('#uesrnamee').val())== data2){
                        
                             cookiClik();
                             alert("log in successful..")
                                     window.location.href = "./ptcOne.html";
                                        }
}