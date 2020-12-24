//window.location.href = "webpage.htm";
var col = '5fd6cf0a7e2e9559b15c7deb';
var label = [];
var upLabel = [];
var labelTname = [];
var lunchBox =[];


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

  var tNam = $('#username').val();
  //this is where the bin name would go
  var bin = "259"
  upLabel[0].bns.push(  {"tname": tNam,"bin": bin});
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
    }
  };
  req.open("PUT", "https://api.jsonbin.io/b/" +col , true);
  req.setRequestHeader("secret-key", mySecretKey);
  req.setRequestHeader("Content-Type", "application/json");
  data2 = JSON.stringify(upLabel);
  req.send(data2);
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
});
});


$(document).ready(function() {
$('#createNew').click(function(){
checkItNew()
});
});
//////end click events for buttons



function newBin(){

  alert("created new");

  var myCol = "5fd07c59516f9d12702a3bc3";

//create remove coll id to go to generic bin
  let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
 lunchBox.push(req.responseText);
    console.log(req.responseText[0].id);
  }
};

req.open("POST", "https://api.jsonbin.io/b", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("collection-id",myCol);
req.setRequestHeader("secret-key", mySecretKey);
req.send('{"Sample": "bin creatio 355"}');

//working create

}

