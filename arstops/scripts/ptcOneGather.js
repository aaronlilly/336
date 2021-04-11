
$(document).ready(function () {
       getallPok();
  });
  




function getallPok(){
        $.ajax({
            method: "GET",
            url: "https://aaronlilly.github.io/336/arstops/scripts/Demo.json"
               }).done(function(data) 
                { 

                  $("#pWantBody").append("<u> Stop Name</u> "+ " " + "<u> NearStreet</u> " + " " + "<u> Area</u> " +" <br>");

                 
                    for(let i=0; i < data.ArStops.length; i++) 
                    {  
                    	$("#pWantBody").append(data.ArStops[i].Name +" " + data.ArStops[i].NearStreet + " " + data.ArStops[i].Area  );
                   	}
                }
            )};    


          
  function saveSelected(){
    var stopName = $('#sName').val();
    var nearStreet = $('#nName').val();
     var area = $('#aName').val();

     alert("You just added " + stopName +" near " + nearStreet + " street " + " in " + area);

  }


  //https://api.jsonbin.io/b/6072657b0ed6f819bea8a5fc