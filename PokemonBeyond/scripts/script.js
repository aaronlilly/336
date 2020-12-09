
function psh(){
var i=0;
var te3xt ="";

var crEx1 = uP[0];
var regEnt1 = dowP[0];

 var crEx2 = crEx1.toUpperCase();

while (wantP[i]) {
 			 te3xt += wantP[i] + "\n";
  				i++;}
  				alert(crEx2 + " " + regEnt1 + " " + te3xt);

};

$(document).ready(function(){
  for (i = 0; i < pokemonlist.length; i++) {
  $('#btnns').append('<button type="button" name ="bt" id="'+pokemonlist[i]+ '\" class="btn btn-' +bsl[i] +' "style="margin:3px">'+ pokemonlist[i] + '</button>')};
});


//issue here, 
$(document).ready(function(){
    $("button[name='bt']").click(function(){
      var currentId = $(this).attr('id');

if ($("#" + currentId +"box").prop('checked')) {
  $("#" + currentId +"span").html("");
  $("#" + currentId+"box").prop('checked',false)
  for (i = 0; i < wantP.length; i++) {
      if(wantP[i] == currentId){
        wantP.splice(i,1);
      }
    }
}
  else{
    $("#append").append("<span id ='" + currentId + "span'></span>"); 
    $("#" + currentId +"span").append(currentId + "\t"); 
    $("#" + currentId +"box").prop('checked',true);
 wantP.push(currentId);
  }
    });
});



$(document).ready(function(){
$("#sendMe").click(function(){


uP.push($('#igname').val());
dowP.push($('#xpx').val());
psh();

});
});




