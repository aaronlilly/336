function cNBlank(COOKI){
    if(COOKI !== undefined){
    //alert("Welcome again " + COOKI);
    }
  }
  
   function cookiClik(){
     let uInput = $('#username').val();
 let uInput2 = $('#uesrname').val();
 var page = uInput;
 var paqe = window.btoa(uInput2);
 var pade = "flight";
       
 Cookies.set('name', page, { expires: 30, path: '' })
Cookies.set('Name', paqe, { expires: 30, path: '' })
Cookies.set('nane', pade, { expires: 1, path: '' })

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


