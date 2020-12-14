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


$(document).ready(function(){
$("#sendMeI").click(function(){
checkIt()

});
});

function IsSame(){
console.log("not new");
}

function IsDifferent(){
  var tNam = $('#igname').val();
  var bin = "259"
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
    upLabel[0].bns.push(  {"tname": tNam,"bin": bin});
    }
  };
  req.open("PUT", "https://api.jsonbin.io/b/" +col , true);
  req.setRequestHeader("secret-key", mySecretKey);
  req.setRequestHeader("Content-Type", "application/json");
  data2 = JSON.stringify(upLabel[0]);
  // console.log(upLabel[0]);
  req.send(data2);
}


// function IsDifferent(){
//   alert("different")
// }


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


// {
//   "bns": [
//     {
//       "tname": "`123",
//       "bin": "a"
//     }
//   ]
// }