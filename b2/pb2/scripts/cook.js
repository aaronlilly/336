function cNBlank(COOKI){
    if(COOKI !== undefined){
    //alert("Welcome again " + COOKI);
    }
  }
  
   function cookiClik(){
     let uInput = $('#username').val();
 let uInput2 = $('#uesrname').val();
       
 Cookies.set('name', uInput, { expires: 30, path: '' })
Cookies.set('regentName', uInput2, { expires: 30, path: '' })
}
     
   


   $(document).ready(function () { 
 var COOKI= Cookies.get('name');
     //alert(COOKI);
       if (COOKI != "") {
         cNBlank(COOKI);
      }
         });
function cNBlank(COOKI){
    if(COOKI !== undefined){
    //alert("Welcome again " + COOKI);
    }
  }
