//Public Variables
//Variable used to keep track of the current song 
var trackNumber = 1; 
//Variable used to point weather the audio is playing or not. 
var audioPointer = false;
//Variable used for progressbar behaviour 
var selectedList = new Array();
 
 //Animation Events
 function AnimCenterLeft(){ 
     document.getElementById('underlineImg').setAttribute("style" ," transform: translate(-148%,0); transition-duration: 1s;");
     document.getElementById('symbolImg').setAttribute("style" ," transform: translate(-205%,0); transition-duration: 1s; width: 90px; height: 90px; background-size:cover; ");
    }
  function AnimCenterRight(){ 
     document.getElementById('underlineImg').setAttribute("style" ," transform: translate(148%,0); transition-duration: 1s;");
     document.getElementById('symbolImg').setAttribute("style" ," transform: translate(205%,0); transition-duration: 1s; width: 90px; height: 90px; background-size:cover; ");
    }
  function AnimLeftCenter(){ 
     document.getElementById('underlineImg').setAttribute("style" ," transform: translate(0,0); transition-duration: 1s; ");
     document.getElementById('symbolImg').setAttribute("style" ," transform: translate(0,0); transition-duration: 1s; width: 90px; height: 90px; background-size:cover; ");
    }
  function AnimRightCenter(){ 
     document.getElementById('underlineImg').setAttribute("style" ," transform: translate(0,0); transition-duration: 1s;");
     document.getElementById('symbolImg').setAttribute("style" ," transform: translate(0,0); transition-duration: 1s; width: 90px; height: 90px; background-size:cover; ");
    }
  
  //Displays a number input box if the user selects the checkbox, and applies a fade-in animation, Opacity.
  function CheckedVeg() {
	 var radioBtn = document.getElementById('uiVegCheck');
	 
	  if (radioBtn.checked == true){
	     document.getElementById('uiVegNumber').setAttribute("style", "	 animation-name: fadeIn;; animation-duration: 3s;");
	   }
	  else{ 
	     document.getElementById('uiVegNumber').setAttribute("style", "opacity:0; display:none;");
	   }
    }   
	
  //Progressbar behaviour
  function progressValues(sender) {
	 var formProgress = document.getElementById('formProgress');
	 //SetValidate Value
	 var validated = true;
	 //GetReference
	 var nameTxtbx = document.getElementById(sender);
		  
	 //Check if the value has already been entered
	 for (var i = -2; i <  selectedList.length; i++ ){  
		if (selectedList[i] == sender) {
			//Apply validation value if value exists
			validated = false;
		}
	  }
          
	 //Validate
     if(sender.value != '' && validated != false){
		formProgress.value = formProgress.value + 13;
		selectedList.push(sender);			
	 }
     else{
		//Check if the box contains a value
		if (nameTxtbx.value == ""){
		 formProgress.value = formProgress.value - 13;	
            //Remove the value from the array		 
		    for (var i = -2; i <  selectedList.length; i++ ){  
			   if (selectedList[i] == sender) 
			    {
				 selectedList.splice(i,1);
			    }
		       			 
			}
	     }      	  
      }
    }
	
  //Form API Validation
  function valdidateForm(){	  
  
     //Regular Expressions 
	 var ContactPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

     //Reference
     var uiTxtbx = document.getElementById('uiName'); 
	 var uiEmail = document.getElementById('uiEmail');
	 var uiContact = document.getElementById('uiContact');
	 var uiSeats = document.getElementById('uiSeats');
	 var uiTime = document.getElementById('uiTime');
	 var uiDate = document.getElementById('uiDate');
	 var uiLocation = document.getElementById('uiLocation');
	 var uiRadio1 = document.getElementById('uiRadio1');

     if(uiTxtbx.value == ''){
		 uiTxtbx.setCustomValidity('Please enter your name.');
	  }	  
     else{
		 uiTxtbx.setCustomValidity('');
	  }	  
	 if(uiEmail.value == ''){
		 uiEmail.setCustomValidity('Please enter your Email-address');
	  }
     else{
		 uiEmail.setCustomValidity('');
	  }	  
	 if(uiContact.value == '' || ContactPattern.test(uiContact.value) == false){
		 uiContact.setCustomValidity('Please enter a valid contact number.');
	  }	  
     else{
		 uiContact.setCustomValidity('');
	  }	  
	 if(uiSeats.value == ''){
		 uiSeats.setCustomValidity('Please enter the number of seats.');
	  }	  
     else{
		 uiSeats.setCustomValidity('');
	  }	  
	 if(uiTime.value == ''){
		 uiTime.setCustomValidity('Please enter the time');
	  }	  
     else{
		 uiTime.setCustomValidity('');
	  }	  
	 if(uiDate.value == ''){
		 uiDate.setCustomValidity('Please enter the date of reservation');
	  }	  
     else{
		 uiDate.setCustomValidity('');
	  }	  
	 if(uiLocation.value == 'Hall of Valor (R150)' || uiLocation.value == 'Redorans Retreat (R75)' || uiLocation.value == 'Brittleshin Pass (R45)' ||uiLocation.value == 'Rimerock Burrow (R45)'){
		 uiLocation.setCustomValidity('');
	  }	 	  
     else{
		 uiLocation.setCustomValidity('Please select an appropriate location');
	  }
	  
	 if(uiRadio1.checked == false && uiRadio2.checked == false){
		 uiRadio1.setCustomValidity('Please select a side.');
	  }
     else{
		 uiRadio1.setCustomValidity('');
	  }
    }
  
  	 //Check Validity and send the information
    function sendit(){      
     try {
       var valid = document.register.checkValidity();
      } 
     catch(err){  
      }
     if(valid){
	   readContact();
   }
 }

 
 //Clear the the progressbar and empty the array
  function Clear() {  
     selectedList.splice(0,selectedList.length);
     document.getElementById('formProgress').value = 0; 
	 location.reload();
   }
   
  //This function determains the price of the reservation depending on the choices made in the forms
   function outputControl(){ 
    
	  //References to factors
	  var SeatsElement = document.getElementById('uiSeats');
	  var locationElement = document.getElementById('uiLocation'); 
	  //Default Value
	  var locationCost = 0;
	
	  //Apply the cost for the location
	  if (locationElement.value == "Hall of Valor (R150)"){
	    	locationCost = 150;
    	}
	  if (locationElement.value == "Redorans Retreat (R75)"){
	    	locationCost = 75;
	   }
	  if (locationElement.value == "Rimerock Burrow (R45)"){
	    	locationCost = 45;
	   }
	  if (locationElement.value == "Brittleshin Pass (R45)"){
		    locationCost = 45;
	    }
		
	   //Calculating the end result
	   document.getElementById('uiInput1').value = SeatsElement.value;
	   document.getElementById('uiInput2').value = locationCost;
	   document.getElementById('outputElement').value = SeatsElement.value * locationCost;	
   }
   
//Audio Behaviour 
 //Play/Pause music
 function PlayPuaseMusic() { 
 
     //Reference the main button
     var audio = document.getElementById('audioController');
      if (audioPointer == false){
         audio.play();
         audioPointer = true;
		 
		   //Start the animations
		if (songName.style.webkitAnimationName !== 'fadeInAndOut') {
		  
		  songName.style.webkitAnimationName = 'fadeInAndOut';
		  songName.style.webkitAnimationDuration = "2s";
		  
		   //Disable the animationName to call again
		  setTimeout(function() {
             songName.style.webkitAnimationName = '';
             }, 2000);
	    }
      } 
      else { 
         audio.pause();
         audioPointer = false;
  }
 }
 
 //Play previous song functions
 function PlayPrev() { 
     //Set the pointer
     audioPointer = true;
     //Reference the audio controller
     var audio = document.getElementById('audioController');
     //Pointer to validate weather a statment has already been executed
     var pointer = true;
     //To store and animate the song name
	 var SongName = document.getElementById('songName');
	   
     //Set the source, pointer and track number values
      //Track 1
     if (trackNumber == 1 && pointer == true){
        audio.src = "Audio/Ancient Stones.mp3";
        audio.pause();
        audio.load();
        audio.play();	
		
		trackNumber = 3;
		pointer = false;
		document.getElementById('songName').innerHTML = "Ancient Stones";
 }
  //Track 2
  if (trackNumber == 2 && pointer == true){
        audio.src = "Audio/Around the Fire.mp3";
        audio.pause();
        audio.load();
        audio.play();	
		
		trackNumber = 1;
		pointer = false;
		document.getElementById('songName').innerHTML = "Around the Fire";
 }
   //Track 3
  if (trackNumber == 3 && pointer == true){
        audio.src = "Audio/From Past to Present.mp3";
        audio.pause();
        audio.load();
        audio.play();	
		
		trackNumber = trackNumber = 2;
		pointer = false;
		document.getElementById('songName').innerHTML = "From Past to Present" ;
  }
    //Start the animations
	if (songName.style.webkitAnimationName !== 'fadeInAndOut') {
		  
		songName.style.webkitAnimationName = 'fadeInAndOut';
		songName.style.webkitAnimationDuration = "2s";
		  
		//Disable the animationName to call again
		  setTimeout(function() {
          songName.style.webkitAnimationName = '';
          }, 2000);
  }
 }
 
 //Play next song function
 function PlayNext() { 
       //Set the pointer
       audioPointer = true;
       //Reference the audio controller
       var audio = document.getElementById('audioController');
       //Pointer to validate weather a statment has already been executed
       var pointer = true;
	   //To store and animate the song name
	   var SongName = document.getElementById('songName');

       //Set the source, pointer and track number values
       //Track 1
       if (trackNumber == 1 && pointer == true){
          audio.src = "Audio/Ancient Stones.mp3";
          audio.pause();
          audio.load();
          audio.play();	
		
		  trackNumber = 2;
		  pointer = false;
		  	  
		  //Value and set the animations for the song name
		  var SongName = document.getElementById('songName');	
		  songName.innerHTML = "Ancient Stones";
		  
    }
  //Track 2
  if (trackNumber == 2 && pointer == true){
          audio.src = "Audio/Around the Fire.mp3";
          audio.pause();
          audio.load();
          audio.play();	
		
		  trackNumber = 3;
	      pointer = false;
		
		  //Value and set the animations for the song name
		  var SongName = document.getElementById('songName');	
		  songName.innerHTML = "Around the Fire";
		  
 }
   //Track 3
  if (trackNumber == 3 && pointer == true){
        audio.src = "Audio/From Past to Present.mp3";
        audio.pause();
        audio.load();
        audio.play();	
		
		trackNumber = trackNumber = 1;
		pointer = false;
		songName.innerHTML = "From Past to Present";
 }
      	  //Start the animations
		  if (songName.style.webkitAnimationName !== 'fadeInAndOut') {
		  
		      songName.style.webkitAnimationName = 'fadeInAndOut';
		      songName.style.webkitAnimationDuration = "2s";
		  
		      //Disable the animationName to call again
		      setTimeout(function() {
                    songName.style.webkitAnimationName = '';
                }, 2000);
		   }
 }
 
//This Function is used to get the current date and time
function GetTimeDateNow() {
  //define hours smaller than 10
  var time = new Date();

  var hours = time.getHours();
  if (hours < 10){
    hours = "0" + hours;
   }
  //define minutes smaller than 10
  var minutes = time.getMinutes();
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  //define seconds smaller than 10
  var seconds = time.getSeconds();
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  //month given as a number from 0 to 11
  var month = time.getMonth() + 1;
  time = time.getDate().toString() + "-" + month.toString() + "-" + time.getFullYear().toString() + " " + hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
  return time;
}

function CreateFormString() {
  //Construct and apply the details string  
   //Reference the form elements
  var returnVal;
  var tableNumber;
  var vegetarians;
  var TimeDate = GetTimeDateNow();
  var total = document.getElementById('outputElement').value;
  var CheckVeg = document.getElementById('uiVegCheck');
  var uiTxtbx = document.getElementById('uiName').value; 
  var uiEmail = document.getElementById('uiEmail').value;
  var uiContact = document.getElementById('uiContact').value;
  var uiSeats = document.getElementById('uiSeats').value;
  var uiTime = document.getElementById('uiTime').value;
  var uiDate = document.getElementById('uiDate').value;
  var uiLocation = document.getElementById('uiLocation').value;
  var uiRadio1 = document.getElementById('uiRadio1');
  
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
 
  return returnVal = "<table style = 'width:100%; height: 700px; text-align:center; color:white;' ><tr><td style = 'width:50%'><p><b>Name/Surname: </p></td><td><p></b><i>" + uiTxtbx + "</i> </p></td></tr> <tr><td><p><b>Email: </b></p></td> <td><p><i>" + uiEmail +"</i></p></td></tr><tr><td><p><b>Contact Number: </b></p></td><td><p><i>" + uiContact + "</i></p></td> </tr><tr> <td><p><b>Number of Seats: </b></p></td><td><p><i>" + uiSeats +"</i></p></td></tr><tr> <td><p><b>Vegetarians: </b></p></td> <td><p><i>" + vegetarians + "</i></p></td> </tr><tr> <td><p><b>Arrival Date: </b></p></td> <td> <p>" + uiDate + "</p></td> </tr><tr> <td> <p><b>Arrival Time: </b></p></td><td><p><i>" + uiTime + "</i></p></td> </tr><tr> <td><p><b>Submitted on:</b></p></td> <td><p><i>" + TimeDate + " </i></p> </td> </tr><tr> <td><p><b>Location:</b></p></td><td><p><i>" + uiLocation +" </i></p></td></tr><tr><td><p><b>Table Side:</b></p></td> <td> <p><i> " + tableNumber +" </i></p> </td></tr><tr> <td> <p><b> </b></p></td> <td> <p><i> Total: R" + total +" </i></p></td></tr></table>";
}