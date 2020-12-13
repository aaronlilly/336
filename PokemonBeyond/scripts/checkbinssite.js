//var col = '5fd3a4b982e9306ae60054c3';
var col = '5fd56a5afbb23c2e36a608b1';
var label = [];
var upLabel = [];
var tNam = $('#igname').val();


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
}


$(document).ready(function(){
$("#sendMeI").click(function(){
checkIt()

});
});

function IsSame(){
alert("not new");
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





function checkIt()
{
        if(tlabel[0].bns.includes(tNam))
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