//window.location.href = "webpage.htm";

var col = '5fd6cf0a7e2e9559b15c7deb';
var label = [];
var upLabel = [];
var labelTname = [];



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


function next(){
upLabel.push(label[0]);

  for(i= 0; i < upLabel[0].bns.length;i++){
labelTname.push(upLabel[0].bns[i].tname)
}
}


///end infoget
/////////////login/newclick

//create
function IsSameNew(){
alert("user name already exists, \n chose another name or login.");
}

function IsDifferentNew(){
  //create new bin 
}

//end create

//login
function IsSame(){
//log in funciton here
}

function IsDifferent(){
  alert(" no account found with user name, \n chose another name or create new                                                                                                                                                                                             .");
}
//end new

//new
function checkItNew()
{
var tNam = $('#igname').val();
  //bins[0].bns.includes(name)
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
var tNam = $('#igname').val();
  //bins[0].bns.includes(name)
        if(labelTname.includes(tNam))
        {
            IsSame();
        }else {
                IsDifferent();
              }           
    };




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
