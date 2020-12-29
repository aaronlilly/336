function cNBlank(COOKI){
    if(COOKI !== undefined){
    //alert("Welcome again " + COOKI);
    }
  }
  
   function cookiClik(){
     let uInput = $('#username').val();
       //alert(uInput);
 Cookies.set('name', uInput, { expires: 30, path: '' })
}
     
   


   $(document).ready(function () { 
 var COOKI= Cookies.get('name');
     //alert(COOKI);
       if (COOKI != "") {
         cNBlank(COOKI);
      }
         });
