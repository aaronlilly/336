
const baseName2 = 'Bullet';
const baseId2 = 'bullet_field_';
const varBR2 = '<br>';

let size2;
let size2Field2;

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
