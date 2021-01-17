var reGexP = [];

$(document).ready(function () {
			 var COOKI = getCookieD("name");
		 if (COOKI != "") {
         cNBlank(COOKI);
    
      }		 
	});
	
	function cNBlank(COOKI){
    if(COOKI !== undefined){
    $('#trainerInfoHere').html(COOKI);
      regentFunction();
    }
  }
  function getCookieD(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


	function regentFunction() {
    var C00KI = getCookieD("regentName");
    reGexP.push(C00KI);
    //console.log(C00KI);
  }


//push to api
// $(document).ready(function () {
//       for(var i = 0; i < reGexP.length; i++) {

//       }
//   });