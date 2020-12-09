
$(document).ready(function(){
  for (i = 0; i < pokemonlist.length; i++) {
  $('#btnns').append('<button type="button" id="'+pokemonlist[i]+ '\" class="btn btn-' +bsl[i] +' "style="margin:3px">'+ pokemonlist[i] + '</button>')};
});




// <button type="button" class="btn btn-info" id="voltorb">Voltorb</button>



$(document).ready(function(){
    $("button").click(function(){
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




