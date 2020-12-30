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
var d234762ger274bfua334fghiudsrt73 = "regentName";
	function regentFunction {
    var C00KI = getCookieD(d234762ger274bfua334fghiudsrt7);
    reGexP.push(C00KI);
    console.log(C00KI);
  }
