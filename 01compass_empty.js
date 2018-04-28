//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }

        if(compassHeading > 345 || compassHeading < 45) {
        text_area.textContent = "I’ve forgotten her face.";
        } 

        if(compassHeading >= 45 && compassHeading < 57) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 57 && compassHeading < 117) {  
        text_area.textContent = "The path to my unit is narrow. The corridor elongates in a line with all the doors on one side. They came loud, knocking on each door till it’s open. They stabbed whoever showed faces. Just lock the door, I said before I go.";
        } 

        if(compassHeading >= 117 && compassHeading < 129) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 129 && compassHeading < 189) {
        text_area.textContent = "Only our door was smashed open, maybe because it is wooden.";
        }

        if(compassHeading >= 189 && compassHeading < 201) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 201 && compassHeading < 261) {
        text_area.textContent = "Her body lied on the kitchen floor, bitten by mad dogs. There is grease, there is blood.";
        }

        if(compassHeading >= 261 && compassHeading < 273) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 273 && compassHeading < 333) {
        text_area.textContent = "I never return.";
        }

        if(compassHeading >= 333 && compassHeading < 345) {
        text_area.textContent = compassHeading;
        }


//"&& is and" "||" is or        
 
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


