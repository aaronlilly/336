
//create remove coll id to go to generic bin
//   let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("POST", "https://api.jsonbin.io/b", true);
// req.setRequestHeader("Content-Type", "application/json");
// // req.setRequestHeader("collection-id",myCol);
// req.setRequestHeader("secret-key", mySecretKey);
// req.send('{"Sample": "bin creatio 355"}');

//working create


//read //added latest 
  // $(document).ready(function ()  
  //           {
		// 	   $.ajax
  //                       ({
  //                   method: "GET",

		// 			beforeSend: function (xhr) {
  //  					 xhr.setRequestHeader("secret-key", mySecretKey);
		// 			},
  //                   url: "https://api.jsonbin.io/b/" + Bin1 + "/latest"
  //                        }).done(function(data) 

  //                              {

  //                                   console.log(data);              
  //                             });
  //           });
          
//working read 


//update
////update updates seemingly work on generic bins but idk bout collections.
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("PUT", "https://api.jsonbin.io/b/" + Bin1, true);
// req.setRequestHeader("secret-key", mySecretKey);
// req.setRequestHeader("Content-Type", "application/json");
// req.send('{"Sample": "An Update ON a BIN 2"}');




//update works

///delete
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("DELETE", "https://api.jsonbin.io/b/" + ColBin3, true);
// req.setRequestHeader("secret-key", mySecretKey);
// req.send();



///delete works
