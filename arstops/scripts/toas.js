function toastyFunct(){
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
  "timeOut": "5000",
  "extendedTimeOut": "2500",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

toastr["success"]('<button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>')
 $('#clearly').click(function() 
  {
  toastr.remove();       
  })
      toastr.options.onHidden = function(){}; 
 $('.toast-close-button').click(function() {});
    

      }
     

  
////end first toast -menu click

