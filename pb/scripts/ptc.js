//window.location.href = "webpage.htm";
var col = '5fd6cf0a7e2e9559b15c7deb';
var label = [];
var upLabel = [];
var labelTname = [];
var resp =[];

// get bins from list of bins, put them in array
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
                      label.push(data);      
			                 next();
    });
});
//take out of array put in another arry to simplify. i know, i shouldnt have to.
function next(){
upLabel.push(label[0][0]);

//take just the names out of that array and put them in yet another array
  for(i= 0; i < upLabel[0].bns.length;i++){
labelTname.push(upLabel[0].bns[i].tname)
}
}
///end infoget
/////////////login/newclick

//create new click if same/different
function IsSameNew(){
alert("user name already exists,\nchose another name or login.");
}

 //add the bin created to the list of bins
 function IsDifferentNew(){

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

///////////////////////////////////////////////////////////end is same is different functions



///////////click events for buttons 
$(document).ready(function() {
$('#logIn').click(function(){
checkIt()
cookiClik()
var x = document.cookie;
console.log(x);
});
});


$(document).ready(function() {
$('#createNew').click(function(){
checkItNew()
});
});
//////end click events for buttons



function newBin(){


   $(document).ready(function ()  
    { 
       var myCol = "5fd07c59516f9d12702a3bc3";
       $.ajax
         ({
         method: "POST",
         beforeSend: function (xhr) {
          xhr.setRequestHeader("collection-id",myCol);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/",
                  data:'{"Sample": "bin creatio 355"}',
                  }).done(function(responseText) 
                     {
                      resp.push(responseText);     
                      console.log(responseText); 
                       
    });
});
 };
   // \\\\\\\\\\\\\\\\

  // var myCol = "5fd07c59516f9d12702a3bc3";
  // let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//            let jbox = JSON.parse(req.responseText)
//            console.log(jbox);
//  //lunchpush(jbox)
//   }
// };



// req.open("POST", "https://api.jsonbin.io/b", true);
// req.setRequestHeader("Content-Type", "application/json");
// // req.setRequestHeader("collection-id",myCol);
// req.setRequestHeader("secret-key", mySecretKey);
// req.send('{"Sample": "bin creatio 355"}');


//working create

// addBintoList(jbox);
// }

// // function lunchpush(jbox){
// // lunchBox.push(jbox.id)
// // }

// function addBintoList(jbox){
//   console.log(jbox);
// }