const baseName = 'Bullet';
const baseId = 'bullet_field_';
const varBR = '<br>';
const headStyler = "<span class='headingBU'>";
const unSpn = "</span>"


let size;
let sizeField;


// function yes(){
//  var iValue =  "yes";
// console.log(iValue);}


function escape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

  var i = 2;
    function addOne() {
        i++;
        document.getElementById('inc').value = i;
    }

function subtractOne() {
        i--;
        document.getElementById('inc').value = i;
    }
$(document).ready(function() { 
  $('#myModal3close').click(function() {
  var iValue =  $('#inc').val();
        console.log (iValue)  }); });





// function meanTo() {
//   alert("You have dismissed this window. If you opened the window in error, this is a correct action. If not, reopen and select 'close'");
// }


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
  document.getElementById("codeSummaryTOC").innerHTML = x;
}
//end summarytoc

// heading 1

function fHeading1() {
  var x = document.getElementById("editorHeading1").value;
  document.getElementById("completeHeading1").innerHTML = x;
  document.getElementById("codeHeading1").innerHTML = x
}

//end heading

//add bullets under headding

$(document).ready(function() {
  sizeField = $('#valueField');
  $('#bulletAddr').click(function() {
    size = sizeField.val();
    $('#codeAddBullet').append(escape("<ul>"));
    for (var i = 0; i < size; i++) {
      let index = i + 1;
      let id = baseId + index;
      let placeholder = baseName + (i + 1);
      $('#outPut').append('<input type="text" id="' + id + '" placeholder="' + placeholder + '">' + varBR);
    }

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
    var iValue =  $('#inc').val();
    $('#completeHeadingNBulletPlus').append('<span id="completeHeadingPlus' + iValue + '">' + "</span>") //within CompleteHeadingNBullet plus i append a span with id of completeHeadingPlus[i] so that i can append to this later.
    
      var currentCompleteHeadingPlus = "#completeHeadingPlus" + iValue
    $(currentCompleteHeadingPlus).append(headStyler + resultResult + unSpn);
       });
     });


//end add heading 2

//within modal3

//$(document).ready(function() { 
  // $('#myModal3close').click(function() {
  // var iValue =  $('#inc').val();
  //       console.log (iValue)  }); });


$(document).ready(function() {
  sizeField2 = $('#valueField2');
  $('#bulletAddr2').click(function() {
    size = sizeField2.val();
    var iValue =  $('#inc').val();
    var codeAddBulletPlus = "#codeAddBullet" + iValue
    var spanCurrentCount = '<span id ="headnbulletplus'+ iValue + '">' + " </span>"
     $('#modalOutput3').append(spanCurrentCount);//appends to modal a span with id of headnbullet plus + iteration value , which is a variable named spanCUrrentCount
    }
    $(codeAddBulletPlus).append(escape("<ul>"));
    for (var i = 0; i < size; i++) {
      let index = i + 1;
      let id = baseId + index;
      let placeholder = baseName + (i + 1);
      $(spanCurrentCount).append('<input type="text" id="' + id + '" placeholder="' + placeholder + '">' + varBR);
    }//within the span i made above I append input boxes based on the number desired by the user,I then make each box have a slightly different id so that whatever is put in the first input box, is different than the third.

  // <div id ="codeHeadnBulletPlus"> </div>
  //          <!--  <span id="codeHeading2"> </span> <br>
  //         <span id ="codeBullet2"> </span> <br> -->


    $('#addTheseBullets2').click(function() {
      size = sizeField2.val();
    var curretCodeBullet = "#codeBullet" + iValue;
    var currentCompleteBullet = "#completeBullet" + iValue;
       $('#codeAddBulletPlus').append(escape('<') + 'span id ="codeBullet' + iValue + '">' + escape('</span>'));
       //once i click the addTheseBullets2 which is within the modal, I append a span of codeBullet[i] to the raw code modal so that inside of codeBullet[i] i will append bullets.
      $('#completeAddBulletPlus').append('<span id ="completeBullet' + iValue + '">' + "</span>")
      for (var i = 0; i < size; i++) {
        let index = i + 1;
        let id = baseId + index;
        let bulletValue = $('#' + id).val();
        $(curretCodeBullet).append(escape('<li>') + bulletValue + escape('</li>')); //within the codebullet[i] I append  a bullet[i] that has the info that user entered
         $(currentCompleteBullet).append('<li>' + bulletValue + '</li>'); // within the completed portion of page I append the same as within code, just i dont display the code info  

      }

      $('#myModal3 .close').click(function() {
             $('#codeAddBullet2').append(escape('</ul>'));
     $('#completeAddBullet2').append('</ul>');
     })

      
       $('#myModal3close').click(function() {
             $('#codeAddBullet2').append(escape('</ul>'));
     $('#completeAddBullet2').append('</ul>');
     })
      
    });
  });
});

//modal bullet remover
$(document).ready(function() {

  $('#bulletRemovr2').click(function() {

$('#codeAddBullet2').html("");
$('#completeAddBullet2').html("");
$('#outPut3').html("");
 });
   });