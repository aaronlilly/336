
function psh(){
x=wantP.length;

if(x==1){
pone(wantP[0].name,wantP[0].type);

}else if(x>1){
ptwo();
}
}

function pone(x,y){
var start = '{"employees": {"atU": { "';
var mid = '": { "pokemonWant": [{ "name": "';
var miB = '", "type": "'
var miB2 = '"}';
var BotM = '],"xan": "';
var nD = '" } }}}'

    var tn = uP[0];
  var zw = dowP[0];
  //tn.toUpperCase()

alert(start + tn.toUpperCase() +mid + x + miB + y + miB2+ BotM + zw + nD);
}

function ptwo(){
  var tn = uP[0];
  var zw = dowP[0];

var text = "";
for(i= 0; i < wantP.length;){
text += wantP[i].name;
i++;
}
alert( tn + zw.toUpperCase() +text);
}

$(document).ready(function(){
  for (i = 0; i < pokemonlist.length; i++) {
  $('#btnns').append('<button type="button" name ="bt" id="'+pokemonlist[i].name+ '\" class="btn btn-' +bsl[i] +' "style="margin:3px">'+ pokemonlist[i].name + '</button>')};
});


$(document).ready(function(){
  for(let i= 0; i < pokemonlist.length;i++){
 $("#"+ pokemonlist[i].name).click(function(){
  var pName = pokemonlist[i].name;
  var pType = pokemonlist[i].type;
var currentId = $(this).attr('id');


//if checked
if ($("#" + currentId +"box").prop('checked')) {
   $("#" + currentId +"span").html("");
    $("#" + currentId+"box").prop('checked',false)
    
    for (x = 0; x < wantP.length; x++) {
     
      if(wantP[x] == currentId){
        wantP.splice(x,1);
        wantPtype.splice(x,1);
      }
    }
  }
  //if not checked
   else{
   
    $("#append").append("<span id ='" + currentId + "span'></span>"); 
    $("#" + currentId +"span").append(currentId + "\t"); 
    $("#" + currentId +"box").prop('checked',true);
  wantP.push(pName);
  wantPtype.push(pType);
  }

});
}
});




$(document).ready(function(){
$("#sendMe").click(function(){


uP.push($('#igname').val());
dowP.push($('#xpx').val());
psh();
udt();
});
});


//checking trainer name if match a trainer name that exists
function udt(){
for (i = 0; i < label[0].bNs.length; i++) {
//console.log(label[i].bNs[i].trainer)

if (uP[0] == label[0].bNs[i].trainer)
binuPdt();

}
}

function binuPdt(){

};
