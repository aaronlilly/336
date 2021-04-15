
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
                 
                      //$("#pWantBody").append("<u> Stop Name</u> "+ " " + "<u> NearStreet</u> " + " " + "<u> Area</u> " + " <u>Reliability</u> "+ <u>Task"<br>");

//https://www.textfixer.com/html/html-table-generator.php
                   
                        
            //<tr><td>Row:1 Cell:1</td><td>Row:1 Cell:2</td><td>Row:1 Cell:3</td><td>Row:1 Cell:4</td><td>Row:1 Cell:5</td></tr>

 //$("#pWantBody2").append('<table class="tftable" border="1">');

$("#pWantBody2").append("<table border = '1' cellpadding = '5'  id='tablish'><thead>   <tr>         </tr>            </thead>            <tbody>            </tbody> </table><br>");

$('table#tablish thead').append('<tr><th>Stop Name</th><th>NearStreet</th><th>Area</th><th>Reliability</th><th>TaskFor</th></tr>')
 //$("#pWantBody2").append('<tr><th>Stop Name</th><th>NearStreet</th><th>Header 3</th><th>Area</th><th>Reliability</th></tr>');
                // $("#pWantBody2").append('<table style="border-color: 1;" border="1">  <tbody>'+ '<tr><td>' +"Stop Name" +"</td><td>" + "Near Street"+ "</td><td> " + "Area" + "</td><td> " + "Reliability" +"<td></tr>" );
       
                    for(let i=0; i < data.ArStops.length; i++) 
                    {  
                    // $("#pWantBody").append(data.ArStops[i].Name +" " + data.ArStops[i].NearStreet + " " + data.ArStops[i].Area + " " + data.ArStops.reliability +"<br>" );
                     
                      $("#pWantBody").html('');

                       // $("#pWantBody2").append('\r\n<style type=\"text\/css\">\r\n.tftable {font-size:12px;color:#333333;width:100%;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}\r\n.tftable th {font-size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}\r\n.tftable tr {background-color:#d4e3e5;}\r\n.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}\r\n.tftable tr:hover {background-color:#ffffff;}\r\n<\/style>\r\n');

$('table#tablish thead').append('<tr><td>' +data.ArStops[i].Name +"</td><td>" + data.ArStops[i].NearStreet + "</td><td> " + data.ArStops[i].Area + "</td><td> " + data.ArStops[i].reliability +"</td><td>data.ArStops[i].taskFor </td></tr>" );
                     
                     }
                     $("#pWantBody2").append('</tbody></table>');
                   


                   });
}

// $(document).ready(function () {
//        $('#dbAdd').click(function() {
// saveSelected();
//        }
//   });



 //onclick="saveSelected()

          
  function saveSelected(){
$('#dbAdd').addClass("initHide");
$('#hiddenButtonContainer').removeClass('initHide');

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

