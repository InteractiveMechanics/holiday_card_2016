Modal = (function() {
    var init = function() {
        bindEvents();
    }
    
    
    var bindEvents = function() {
    	$(document).ready(showAttract);
    	$(document).on('click tap', '#attract', showScene);
        
    }

    var showAttract = function() {
    	$('#attract').removeClass('fade').addClass('in');

    }

    var showScene = function() {
    	$('#attract').addClass('fade').removeClass('in');
    }

    return {
        init: init
    }
})();
