function toastR(){
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
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

toastr["success"]('<span style="margin-right:20%; font-size:10px;">Menu </span> <div id="toastTop">User Options :</div><div id="myList"> My List - <span id ="myListBtns" style="margin-bottom:2%;">  <button type="button" class="btn btn-info" id="AddSaved">Add</button>  <button type="button" class="btn btn-danger" id="RemoveSaved">Remove</button> <button type="button" class="btn btn-warning" id="ViewSaved" style="margin-top:2%;">View</button>   <button type="button" class="btn btn-secondary" id="ShareSaved" style="margin-top:2%;">Share</button>  <button type="button" class="btn btn-primary" id="Advanced" style="margin-top:2%;">Advanced</button></span> </div> <hr style="border: 2px solid blue; border-radius: 5px;">' +
  // ' <div id="otherZ">Other Trainers -  <span id ="othersBtns"> <button type="button" class="btn btn-light" id="trainNam" style="margin-top:2%;" > Search</button> </div> <hr style="border: 2px solid white; border-radius: 5px;"> ' +
  '<div> Save Data  -  <button type="button" id="dbSend" class="btn btn-dark">Save Lists</button></div> <div id ="endOfToast"></div>')
 $('#clearly').click(function() 
  {
  toastr.remove();        
  $("#menubox").prop('checked',false);
  })
      toastr.options.onHidden = function(){ $("#menubox").prop('checked',false)}; 
 $('.toast-close-button').click(function() { $("#menubox").prop('checked',false);});
    $('#AddSaved').click(function() {
                       $('#subtractionAl').css({'display':'none'});
                       $('.ViewAll').css({'display':'none'});

    $('#additionAl').css({
        'height': '200px',
        'width': '320px',
        'border': 'solid',
        'border-color':'#17A2B8',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'left',
        'margin-right':'2%',
        'display':'block'
    });
      });
     $('#RemoveSaved').click(function() {
      $('#additionAl').css({'display':'none'});
      $('.ViewAll').css({'display':'none'});
                      $('#subtractionAl').css({
        'height': '200px',
        'width': '320px',
        'border': 'solid',
        'border-color':'#DC3545',
        'border-radius':'5%',
        'border-width':'thin',
        'float':'right',
        'margin-left':'2%',
        'display':'block'
    });
      })
     $('#ViewSaved').click(function() {
                       $('#subtractionAl').css({'display':'none'});
                       $('#additionAl').css({'display':'none'});
                        $('.ViewAll').css({
        'display':'block'
    });

      })
     

  }
////end first toast -menu click

