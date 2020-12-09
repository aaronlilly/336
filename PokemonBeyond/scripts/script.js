
$(document).ready(function(){
    $("button").click(function(){
      var currentId = $(this).attr('id');
      // /$("#append").html("");

//$("#append").append(currentId + "\t"); 

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




