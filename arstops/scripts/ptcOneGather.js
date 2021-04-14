
let existingContent = [];

$(document).ready(function () {
       getallPok();
  });
  

const mySecretKey = "$2b$10$.zB2DmsGaG7VD7oTTSJ5a.qkLaSUSpwFfe49Ytg7/mhD/nl/ql3vC";



 
function getallPok() {
  // let existingContent = [];
    //https://api.jsonbin.io/b/6072657b0ed6f819bea8a5fc

       $.ajax
         ({
         method: "GET",
         beforeSend: function (xhr) {
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  url: "https://api.jsonbin.io/b/6072657b0ed6f819bea8a5fc"
                   + "/latest"
                  }).done(function(data) {

                    $('#waiting').css("display","block");
                    //clear
                    $("#pWantBody").html('');

                    //push to an array
                    existingContent.push(data);
                 
                      $("#pWantBody").append("<u> Stop Name</u> "+ " " + "<u> NearStreet</u> " + " " + "<u> Area</u> " + " <u>Reliability</u> "+ "<br>");

                 
                    for(let i=0; i < data.ArStops.length; i++) 
                    {  
                     $("#pWantBody").append(data.ArStops[i].Name +" " + data.ArStops[i].NearStreet + " " + data.ArStops[i].Area + " " + data.ArStops.reliability +"<br>" );
                     }
                   

                   });
}



          
  function saveSelected(){
let radioValue = $("input[name='reliability']:checked").val();
    var stopName = $('#sName').val();
    var nearStreet = $('#nName').val();
     var area = $('#aName').val();

existingContent[0].ArStops.push({"Name"  : stopName, "NearStreet" : nearStreet, "Area" :area , "reliability" : radioValue });



 $.ajax
       ({
           url: "https://api.jsonbin.io/b/6072657b0ed6f819bea8a5fc", 
          method: "PUT",
  versioning: false,
          beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("secret-key", mySecretKey);
               },
                  
                 data: JSON.stringify(existingContent[0]),
                  }).done(function(responseText) 
                     {
                      console.log(responseText)
     //toastyFunct();
      ;                 
    });

//Name: "TimeCapsule", NearStreet: "?", Area: "?"}
     //alert("You just added " + stopName +" near " + nearStreet + " street " + " in " + area + " with the reliability of " + radioValue);
//alert(radioValue);
toastyFunct(stopName,nearStreet,area,radioValue);

  }

