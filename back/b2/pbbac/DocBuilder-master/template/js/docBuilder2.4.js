const baseName = 'Bullet';
const baseId = 'bullet_field_';
const varBR = '<br>';
const headStyler = "<span class='headingBU'>";
const unSpn = "</span>"

let size;
let sizeField;

const baseName2 = 'Bullet';
const baseId2 = 'bullet_field_';
const varBR2 = '<br>';

let size2;
let size2Field2;

function escape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}



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
$(document).ready(function() {
    $('#editorHeading1').click(function() {
      $('#codeSummaryTOC').html("");
      $('#codeSummaryTOC').append(escape("<span id ='summaryTocHeading'>"));
  });
  });



function summaryToc() {
  var x = document.getElementById("editorSummaryToc").value;
  document.getElementById("completeSummaryTOC").innerHTML = x;
  document.getElementById("codeSummaryTOC").innerHTML = x ;
}


$(document).ready(function() {
  $('#headingOneAddr').click(function() {

  var x = document.getElementById("editorHeading1").value;
  $('#codeHeading1').html(x);
  document.getElementById("completeHeading1").innerHTML = x;
$('#codeHeading1').append(escape("</span>"));
  });
   });

//remove heading
$(document).ready(function() {
 $('#headingOneRemovr').click(function() {
 $('#codeHeading1').html("");
  $('#completeHeading1').html("");
});
   });

//end heading

//add bullets under headding

$(document).ready(function() {
  sizeField = $('#valueField');
  $('#bulletAddr').click(function() {
    // $('#codeAddBullet').append(escape("</span>"));
    // $('#codeAddBullet').append("<br>");
    size = sizeField.val();
    $('#codeAddBullet').append(escape("<ul>"));
    for (var i = 0; i < size; i++) {
      let index = i + 1;
      let id = baseId + index;
      let placeholder = baseName + (i + 1);
      $('#outPut').append('<input type="text" id="' + id + '" placeholder="' + placeholder + '">' + varBR);
    }
      });

$(document).ready(function() {
    $('#addTheseBullets').click(function() {
      size = sizeField.val();
      for (var i = 0; i < size; i++) {
        let index = i + 1;
        let id = baseId + index;
        let bulletValue = $('#' + id).val();
        $('#codeAddBullet').append(escape('<li>') + bulletValue + escape('</li>'));
         $('#completeAddBullet').append('<li>' + bulletValue + '</li>');

      }

      $('#myModal2 .close').click(function() {
     $('#codeAddBullet').append(escape('</ul>'));
     $('#completeAddBullet').append('</ul>');
     })

      
       $('#myModal2close').click(function() {
     $('#codeAddBullet').append(escape('</ul>'));
     $('#completeAddBullet').append('</ul>');
     })
      
    });
  });


//end add bullet under heading 1

//remove bullets under heading 1


$(document).ready(function() {

  $('#bulletRemovr').click(function() {

$('#codeAddBullet').html("");
$('#completeAddBullet').html("");

 });
   });

//end remove bullets under heading 1

//add heading 2


$(document).ready(function() {
   $('#addThisHeadding').click(function() {
    var resultResult =  $('#editorHeading2').val();
    $('#codeHeading2').append(escape(headStyler) + resultResult);
    $('#codeHeading2').append(escape(unSpn));
$('#completeHeading2').append(headStyler + resultResult + unSpn);
       });
     });
 });

//


$(document).ready(function() {
  size2Field2 = $('#valueField2');
  $('#bulletAddr2').click(function() {
    size2 = size2Field2.val();
    $('#codeAddBullet2').append(escape("<ul>"));
    for (var i = 0; i < size2; i++) {
      let index = i + 1;
      let id = baseId2 + index;
      let placeholder = baseName2 + (i + 1);
      $('#outPut3').append('<input type="text" id="' + id + '" placeholder="' + placeholder + '">' + varBR2);
    }
   });
      });
      
$(document).ready(function() {
    $('#addTheseBullets2').click(function() {
      size2 = size2Field2.val();
      for (var i = 0; i < size2; i++) {
        let index = i + 1;
        let id = baseId2 + index;
        let bulletValue = $('#' + id).val();
        $('#codeAddBullet2').append(escape('<li>') + bulletValue + escape('</li>'));
         $('#completeAddBullet2').append('<li>' + bulletValue + '</li>');
                                      }//forloop

      $('#myModal3 .close').click(function() {
     $('#codeAddBullet2').append(escape('</ul>'));
     $('#completeAddBullet2').append('</ul>');
                                             }); //mymodal3.close click
      
    });//addthesebulletsclick
  });//docreadyfunct



//modal bullet remover
$(document).ready(function() {

  $('#bulletRemovr2').click(function() {

$('#codeAddBullet2').html("");
$('#completeAddBullet2').html("");
$('#outPut3').html("");
 });
   });
