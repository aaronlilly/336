function cNBlank(COOKI){
    if(COOKI !== undefined){
    //alert("Welcome again " + COOKI);
    }
  }
  
   function cookiClik(){
     let uInput = $('#username').val();
 let uInput2 = $('#uesrname').val();
 var page = toUpperCase(uInput);
 var paqe = window.btoa(uInput2);
       
 Cookies.set('name', page, { expires: 30, path: '' })
Cookies.set('Name', paqe, { expires: 30, path: '' })

cooki2(paqe);
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


function cooki2(page){
  var call = '600cd7113126bb747e9e2252';
  
}