//toast menu
$(document).ready(function() 
{
      toastR();
      $('#menYou').click(function() {
          toastR();
        });
});
//end toast menu


//Modal Function

function saveSelected(text)
{
alert(text);
}

//End Motal Funct





//menyou
$(document).ready(function () {
    $('#hideAdd').click(function() {
    $('#additionAl').css({
        'height': '200px',
        'width': '300',
        'border': 'solid',
        'border-color':'#17A2B8',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'left',
        'margin-right':'2%',
        'display':'none'
    });

      $('.addMenuUp').html("");
      $('#selClick').css({'display':'none'});
      });

       $('#hideSubtract').click(function() {
    $('#subtractionAl').css({
        'height': '200px',
        'width': '300',
        'border': 'solid',
        'border-color':'#17A2B8',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'right',
        'margin-left':'2%',
        'display':'none'
    });

      });
       $('#selectAdd').click(function() {
      $('.addMenuUp').html("");
   $('#selClick').css({'display':'block'});
$('#additionAl').css({
'display':'block',
'width':'315px',
'border': 'solid',
'border-color': '#17A2B8',
'border-radius': '5%',
'border-width':'thin',
'display':'block',
'float':'left',
'margin-right':'2%',
'height': 'auto'}
);
});

});
//menyou




