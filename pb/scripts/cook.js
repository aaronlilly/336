function cNBlank(COOKI){
    alert("Welcome again " + COOKI);
  }
  
   $(document).ready(function () { 
     $('#logIn').click(function() {
     let uInput = $('#username').val();
       //alert(uInput);
 Cookies.set('name', uInput, { expires: 30, path: '' })
     
         });
   });
   $(document).ready(function () { 
 var COOKI= Cookies.get('name');
     //alert(COOKI);
       if (COOKI != "") {
         cNBlank(COOKI);
      }
         });
