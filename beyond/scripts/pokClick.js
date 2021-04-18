function pokClick(id,i,data)
{

  alert(id);
 //if checked
 if ($("#" + id +"box").prop('checked')) 
   {
    //check(id,i,data);
    $("#" + id +"box").prop('checked',false)
    $('#'+id).removeClass('pokSelctd');
   }    
  
 //if not checked
  else
  {
   // notcheck(id,i,data);
   $("#" + id +"box").prop('checked',true);
    $('#'+id).addClass('pokSelctd');
  }     
}


function check(id){


}

function notcheck(id)
{

}