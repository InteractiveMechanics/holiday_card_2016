Modal = (function() {
    var init = function() {
        bindEvents();
    }
    
    
    var bindEvents = function() {
    	$(document).ready(showAttract);
    	$(document).on('click tap', '#attract', showScene);
        
    }

    var showAttract = function() {
    	$('#attract').removeClass('fade').addClass('in').css('z-index', '3');

    }

    var showScene = function() {
    	$('#attract').addClass('fade').removeClass('in').css('z-index', '0');
    }

    return {
        init: init,
        showAttract: showAttract
    }
})();
