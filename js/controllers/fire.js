Fire = (function() {

    var init = function() {
        bindEvents();
    }
   
    var bindEvents = function() {
    }


    var canvas = document.querySelector("#fire");
    var context = canvas.getContext("2d");
    var myImage = new Image();
    myImage.src = "./assets/fire.png";
    myImage.addEventListener("load", loadImage, false);

    function loadImage(e) {
        animate();
    }
 
    var shift = 0;
    var frameWidth = 120;
    var frameHeight = 120;
    var totalFrames = 9;
    var currentFrame = 0;
    var lastAdvance = 0;
 
    function animate() {
        context.clearRect(0, 0, 120, 120);
 
        //draw each frame + place them in the middle
        context.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                        0, 0, frameWidth, frameHeight);
     
        shift += frameWidth + 1;
     
        /*
            Start at the beginning once you've reached the
            end of your sprite!
        */
        if (currentFrame == totalFrames) {
            shift = 0;
            currentFrame = 0;
        }
     
        currentFrame++;
     
    
        requestAnimationFrame(animate);


        
    }


    
    
    return {
        init: init
    }
})();