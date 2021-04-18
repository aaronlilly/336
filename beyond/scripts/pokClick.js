function pokClick(id,i,data,text)
{

 //if checked
 if ($("#" + id +"box").prop('checked')) 
   {
    check(id,i,data,text);
    $("#" + id +"box").prop('checked',false)
    $('#'+id).removeClass('pokSelctd');
   }    
  
 //if not checked
  else
  {
   notcheck(id,i,data,text);
   $("#" + id +"box").prop('checked',true);
    $('#'+id).addClass('pokSelctd');
  }     
}

//this function runs if the above checked is true
function check(id,i,data,text){
alert(text + "was checked")

}

//this function runs if the above checked is not true (else)
function notcheck(id,i,data,text)
{
alert(text + "was not checked")
}