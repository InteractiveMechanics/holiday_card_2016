Utilities = (function() {

    var init = function() {
        bindEvents();
    }
   
    var bindEvents = function() {
    	$(document).ready(resetURL);
        
    }

    var resetURL = function() {
    	location.replace('localhost:4000');
    }
    
    return {
        init: init
    }
})();