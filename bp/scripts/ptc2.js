var c0l = '600cd7113126bb747e9e2252';
let binArray = [];


// get bins from list of bins, put them in array //this is correct
 $(document).ready(function ()  
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
                       next(data);
    });
});

function next(data){
console.log(data)
binArray.push(data[0])
console.log(binArray);
}
///end infoget
/////////////login/newclick

//create new click if same/different
function IsSameNew(){
alert("user name already exists,\nchose another name or login.");
}

 //add the bin created to the list of bins
 function IsDifferentNew(){
 ajakc();
newBin();

}
//end bin list add
//end createclick

///////////////is same is different funcitons
//login
function IsSame(){
//log in funciton here
}

function IsDifferent(){
  alert(" no account found with user name,\nchose another name or create new                                                                                                                                                                                             .");
}
//end new

//new
function checkItNew()
{
var tNam = $('#username').val();
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
var tNam = $('#username').val();
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
cookiClik()
// var x = document.cookie;
// console.log(x);
});
});


$(document).ready(function() {
$('#createNew').click(function(){
checkItNew()
cookiClik()
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
var trainerName = $('#username').val();
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

alert("new account created!");


//window.location.href = "./ptcOne.html";

}


////////////////////////////////////
function ajakc(){
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
                      naxt(data);
});
}

function naxt(data){


 
lapel.push(data[0]);

thirdy();
}


function thirdy(){
neuBin()
      
      
 
}

function neuBin(){
  var trainerName = $('#username').val();
   var  cretedBin = Cookies.get('Name');
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
                  
                 data:'{"tname": trainerName,"bin": cretedBin}',
                  }).done(function(responseText) 
                     {
                     
          updateListFunt(responseText)
         
                      //console.log(responseText);                 
    });
}
function updateListFunt(responseText){
 console.log(responseText);

resq.push(responseText);;
var trainerName = $('#username').val();
var createdBin = resq[0].id;

lapel.push({"tname": trainerName,"bin": createdBin});




 $.ajax
       ({
           url: "https://api.jsonbin.io/b/" + c0l, 
          method: "PUT",
  versioning: false,
          beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  
                 data: JSON.stringify(lapel),
                  }).done(function(responseText) 
                     {
                      //console.log(responseText)
      
      ;                 
    });

}


