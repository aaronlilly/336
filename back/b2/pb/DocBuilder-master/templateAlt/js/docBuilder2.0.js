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

  


//else


//Document Title Change

 $(document).ready(function() {
   $('#editorDocumentTitle').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname =  
        $('#toastrTextBox').val();
      $('#codeDocTitle').html(FLname);
      $('#completeDocTitle').html(FLname);  
       });
     });
  });    
 // End Document Title Change

// Blue Formated Summary / Toc 
 //editorSummaryTocHeading


 $(document).ready(function() {
   $('#editorSummaryTocHeading').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname = 
        $('#toastrTextBox').val();
        $('#editorSummaryTocHeading').html(FLname);
        $('#codeSummaryTocHeading').html(FLname);
        $('#completeSummaryTocHeading').html(FLname);

     
       });
     });
  });    

 //End Blue Formated Summary / Toc 

// Non Format Summary Text (below Summary TOC)

 $(document).ready(function() {
   $('#editorSummaryTitleText').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname = 
        $('#toastrTextBox').val();
       $('#summaryEditedTitle').html(FLname);
       $('#codeSummaryText').html(FLname);
       $('#completeSummaryTitleText').html(FLname);

     
       });
     });
  });    
// End Non Format Summary Text (below Summary TOC)

// Blue underline Heading 1 Change

$(document).ready(function() {
   $('#editorSummaryHeading').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname =  
        $('#toastrTextBox').val();
      $('#completeSummaryHeading').html(FLname);
      $('#codeSummaryHeading').html(FLname);
     
       });
     });
  });    
// End Blue underline Heading 1 Change

//Bullet 1 Change


$(document).ready(function() {
   $('#editorBullet1').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname =  
        $('#toastrTextBox').val();
      $('#completeAddHead2.completeBullet1').html(FLname);
      $('#codeBullet1').html(FLname);
     
       });
     });
  });    

//End Bullet 1 Change
//Add Bullet 2

$(document).ready(function() {
   $('#editorAddBullet2').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname =  
        $('#toastrTextBox').val();
      $('#completeAddBullet2').append("<li>"+ FLname + "</li>");
           
      $('#codeAddBullet2').append(escape("<li>"+ FLname + "</li>"));

      function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      $('#codeAddBullet2').append("<br>");

       });
     });
  }); 


//end Add Bullet

//Remove Bullet

$(document).ready(function() {
   $('#editorRemoveBullet2').click(function() {
      toastr["success"]('<div>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-warning" style="margin: 0 8px 0 8px";>Remove All Bullets<br>From Heading 1</button>')
      $('#inPut').click(function() {
      $('#completeAddBullet2').html("");
      $('#codeAddBullet2').html("");


       });
     });
  }); 

//End Remove Bullet

//Add Heading


$(document).ready(function() {
   $('#editorAddHead2').click(function() {
      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
            $('#inPut').click(function() {
          //add heading
      var FLname =  
        $('#toastrTextBox').val();

      // $('#completeAddHead2').html("");
      // $('#codeAddHead2').html("");

      $('#completeAddHead2').append("<i class='fas fa-caret-right'></i>" + "<span id='completeSummaryHeading'>" + FLname + "</span>");
           
      $('#codeAddHead2').append(escape("<i class='fas fa-caret-right'></i> <span id='SummaryHeading'>" + FLname + "</span>"));

      function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      

       });
     });
  }); 

//add bullet2plus

$(document).ready(function() {

      
   



   $('#editorAddBullet2plus').click(function() {

     //var headValueX = $('#completeAddHead2').val();
      //$('#completeAddHead2').html(headValueX);
      //$('#codeAddHead2').html("");

      $('#completeAddHead2').append("<ul>");

      $('#codeAddHead2').append(escape("<ul>"));

      function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      toastr["success"]('<div><textarea rows="10" cols="30" class="input-small" value="textarea"  id="toastrTextBox"/>&nbsp;</div><div><button type="button" id="inPut" class="btn btn-info" style="margin: 0 8px 0 8px";>Make Change</button>')
      $('#inPut').click(function() {
      var FLname =  
        $('#toastrTextBox').val();



      


      $('#completeAddBullet2Plus').append("<li>"+ FLname + "</li>");
           
      $('#codeAddBullet2Plus').append(escape("<li>"+ FLname + "</li>"));

      function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      $('#codeAddBullet2Plus').append("<br>");


      $('.toast-close-button').click(function() {
   $('#completeAddBullet2Plus').append("</ul>");
    $('#codeAddBullet2Plus').append(escape("</ul>"));

      function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }



});
       });
     });
  }); 





//end adding bullets

$(document).ready(function() {
   $('#ulBulletEnd').click(function() {

    $('#completeAddHeadnBullet2Bullet').append("</ul>");
      
      $('#codeAddHeadnBullet2Bullet').append(escape("</ul>"));
       function escape(value) {
      return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
      $('#codeAddHeadnBullet2Bullet').append("<br>");
          });
        });



