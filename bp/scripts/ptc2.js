var c0l = '600cd7113126bb747e9e2252';
let binArray = [];
 var username = $("#username").val();
 var usernane = $("#uesrname").val();


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
                      console.log(data)     
                       next(data);
    });
});

function next(data){
binArray.push(data[0])
}
///end infoget


$(document).ready(function() {
$('#createNew').click(function(){
newBin();
});
});

//creates bin in collection of bins (not a collection now)
function newBin(){
      
                   $.ajax
                  ({
                    url: "https://api.jsonbin.io/b/",    
         method: "POST",
         beforeSend: function (xhr) {
               xhr.setRequestHeader("Content-Type", "application/json");
               xhr.setRequestHeader("secret-key", mySecretKey);
              },
                  
                  data:'[   {     "bns": [       {        "tname": "' + username + '", "bin": "'+ usernane+'"        }     ]   }]',
              
                 //data:'{"results": [{"trainer": "' + $('#username').val() +'","have": [],"want": []}]}',
                  }).done(function(responseText) 
                     {
           //updateListFunct(responseText)
                         

                        updateListFunt(responseText.id)

                      //{success: true, data: Array(1), id: "...", private: true}
                                   
    });
 };


function updateListFunt(responseTextId){

var data2send = '{tname:"'+ username + '",bin:"' + responseTextId +'"}'

binArray.push(data2send)


console.log(data2send);
console.log(binArray);
 // $.ajax
 //       ({
 //           url: "https://api.jsonbin.io/b/" + c0l, 
 //          method: "PUT",
 //  versioning: false,
 //          beforeSend: function (xhr) {
 //                xhr.setRequestHeader("Content-Type", "application/json");
 //                xhr.setRequestHeader("secret-key", mySecretKey);
 //               },
 //                  //JSON.stringify(data2send),
 //                 data: data2send,
 //                  }).done(function(responseText) 
 //                     {
 //                      //console.log(responseText)
 //      toastyFunct();
      // ;                 
    // });

 }

function toastyFunct(){

alert("new account created!");


//window.location.href = "./ptcOne.html";

}

