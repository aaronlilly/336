// Toasterjs
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": 0,
  "extendedTimeOut": 0,
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
  "tapToDismiss": false
}

//code clicker 
$(document).ready(function() {
   $('#clickForCode').click(function() {
    var resultResult =  
        $('#rawCodeHere').val();
$('#codeDocTitle').html(resultResult);
       });
     });
//end code cliker
    

    //title
    function titleHere() {
  var x = document.getElementById("editorTitleHere").value;
  document.getElementById("codeTitleHere").innerHTML = x;
}



// Summary TOC


function summaryToc() {
  var x = document.getElementById("editorSummaryToc").value;
  document.getElementById("completeSummaryTOC").innerHTML = x;
}
//end summarytoc

// heading 1

function fHeading1() {
  var x = document.getElementById("editorHeading1").value;
  document.getElementById("completeHeading1").innerHTML = x;
}

//end heading


//add bullet under heading 1

// $(document).ready(function() {
//    $('#fAddBullet').click(function() {
//        $('#codeAddBullet').append(escape("<ul>"));

//       function escape(value) {
//       return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//       }

//       toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Add Bullet</button>')
//       $('#inPut').click(function() {
//       var FLname =  
//         $('#toastrTextBox').val();
//       $('#completeAddBullet').append("<li>"+ FLname + "</li>");
           
//       $('#codeAddBullet').append(escape("<li>"+ FLname + "</li>"));

//       function escape(value) {
//       return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//       }
//       $('#codeAddBullet').append("<br>");

<<<<<<< HEAD
      toastr["success"]('<div><input class="input-small" id="toastrTextBox" value="textbox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Add Bullet</button>')
      $('#inPut').click(function() {
      var FLname =  
        $('#toastrTextBox').val();
      $('#completeAddBullet').append("<li>"+ FLname + "</li>");
           
      $('#codeAddBullet').append(escape("<li>"+ FLname + "</li>"));
=======
//       $('.toast-close-button').click(function() {
//    $('#completeAddBullet').append("</ul>");
//     $('#codeAddBullet').append(escape("</ul>"));
>>>>>>> 5f826cd7d08cc15544b902336be76f5c52cf120e

//       function escape(value) {
//       return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//       }


//        });
//      });
//   }); 
//     }); 
$(document).ready(function() { 

 function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      
  $('#bulletAddr').click(function() {
  
 $('#codeAddBullet').append(escape("<ul>"));

      // function escape(value) {
      // return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      // }

 for(var i=0; i < valueField.value; i++) {
 var varBullet =  "Bullet" 
   var varI = i + 1
   var varBR = "<br>"
  var bulletI = varBullet + varI

  var varBulletField = "bulletField"
  var bulletFieldI =  varBulletField + bulletI

  
    $('#outPut').append(" <input type='text' id='" + bulletFieldI  + "' placeholder="+ bulletI + ">" + varBR);
    

    }

  $('#addTheseBullets').click(function() {



 for(var i=0; i < valueField.value; i++) {
   
    var varBulletFieldN = "#bulletField"
  var bulletFieldI =  varBulletFieldN + bulletI
   var bulletValue =  $(bulletFieldI).val();
       

  $('#codeAddBullet').append(escape("<li>") + bulletValue  + escape("</li>")  );

      // function escape(value) {
      // return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      // }

    }
  });
 
}); 
  }); 

//end add bullet under heading 1

