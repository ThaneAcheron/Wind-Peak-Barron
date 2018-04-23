//Initiate 
function initiate(){
 content = document.getElementById('ConfirmationContent');
}

//This function animates the vertical scroll to the desired anchor
function scrollToAnchor(aid){
 var aTag = $("a[name='"+ aid +"']");
 $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
     
//Read the html content
function readContact(){
 var request = new XMLHttpRequest();
 request.addEventListener('load', showContent, false);
 //Open the document using GET
 request.open("GET", "Stubs/DetailsConfirmation.html", true);
 request.send();
}

//Add the content
function showContent(e){
  //add data to secContent
  content.innerHTML = e.target.responseText;
  //Animate to the new content
  scrollToAnchor('ConfirmAnchor');  
  //Create and apply a structured string from the form elements, see javascript.js for the method.
  document.getElementById('detailsText').innerHTML = CreateFormString();
}

//This function posts the user information to a php script which writes the information to a log file. >Log>WriteToFile.php
 function postUserRes(){
  //create FormData to send data to the server
  var data = new FormData();

  var tableNumber;
  var vegetarians;
  var TimeDate = GetTimeDateNow();
  var uiRadio1 = document.getElementById('uiRadio1');
  //
  var total = document.getElementById('outputElement').value;
  var CheckVeg = document.getElementById('uiVegCheck');
  var uiTxtbx = document.getElementById('uiName').value; 
  var uiEmail = document.getElementById('uiEmail').value;
  var uiContact = document.getElementById('uiContact').value;
  var uiSeats = document.getElementById('uiSeats').value;
  var uiTime = document.getElementById('uiTime').value;
  var uiDate = document.getElementById('uiDate').value;
  var uiLocation = document.getElementById('uiLocation').value;
  
	 if (uiRadio1.checked == true)
	 {
		 tableNumber = 1;
	 }
	 else
	 {
		 tableNumber = 2;
	 }
	 
	 if (CheckVeg.checked == false)
	 {
		 vegetarians = "None";
	 }
	 else
	 {
		 vegetarians = document.getElementById('uiVegNumber').value;
	 }

data.append('sTime', TimeDate);
data.append('userName', uiTxtbx);
data.append('email', uiEmail);
data.append('contact', uiContact);
data.append('seats', uiSeats);
data.append('aTime', uiTime);
data.append('aDate', uiDate);
data.append('location', uiLocation);
data.append('tableNumber', tableNumber);
data.append('vegetarians', vegetarians);


//define a file to add data
var url = "Log/WriteToFile.php";
//define and object request
var request = new XMLHttpRequest();

request.open("POST", url, false);
request.send(data);
}
   
//Events
window.addEventListener('load', initiate, false);