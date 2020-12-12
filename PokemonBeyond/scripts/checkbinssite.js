var col = '5fd3a4b982e9306ae60054c3';
var label = [];
var upLabel = [];


 $(document).ready(function ()  
           {
			   $.ajax
                         ({
                    method: "GET",
                     complete: function(r){
       //iD.Push(r.responseText);

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
alert("nothing happened");
}





function IsDifferent(){
 let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
  console.log(req.responseText);

var tNam = $('#igname').val();

upLabel[0].bns.push(  {"tname": tNam,"bin": req.responseText});

  }
};

 req.open("PUT", "https://api.jsonbin.io/b/" +col , true);
req.setRequestHeader("secret-key", mySecretKey);
req.setRequestHeader("Content-Type", "application/json");




data2 = JSON.stringify(upLabel);
req.send(data2);


}

function checkIt()
{
var gN = $('#igname').val();
//if(gN == label[0].bNs[0].trainer)
if(gN == label[0].bns[0].tname)
{
IsSame();
}else {
IsDifferent();
}
}


//uP.push($('#igname').val());
//dowP.push($('#xpx').val());
