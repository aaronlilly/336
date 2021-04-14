function toastyFunct(stopName,nearStreet,area){
toastr.options = {
 "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "700",
  "hideDuration": "1000",
  "timeOut": "0",
  "extendedTimeOut": "0",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
  "tapToDismiss": false
}



toastr["success"]('<button type="button" id="okBtn" class="btn btn-primary">Send Data to database</button></div>')
 $('#okBtn').click(function() 
  {
    
   let radioValue2 = $("input[name='reliability']:checked").val();
   

    alert( "You just added " + stopName +" near " + nearStreet + " street " + " in " + area + " with the reliability of " + radioValue2 +" ... \r\n Database Updating, allow a few moments for data to show...");

   // window.open('#', "_self");
   


    // $('#sName').html('');
    // $('#nName').html('');
    // $('#aName').html('');

   

//document.getElementById('#sName').value='';

  toastr.remove();       
   window.open('https://aaronlilly.github.io//336/arstops/ArStop.html', "_self");
// window.open('#', "_self");
  })
      toastr.options.onHidden = function(){}; 
 $('.toast-close-button').click(function() {});
    

      }
     

  
////end first toast -menu click

