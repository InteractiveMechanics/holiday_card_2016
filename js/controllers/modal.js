Modal = (function() {
    var init = function() {
        bindEvents();
    }
    
    
    var bindEvents = function() {
    	$(document).ready(showAttract);
        $(document).ready(checkScreen);
    	$(document).on('click tap', '#attract', showScene);
        $(window).on('orientationchange', checkScreen);
        $(window).on('resize', checkScreen);

        
    }

    var showAttract = function() {
    	$('#attract').removeClass('fade').addClass('in').css('z-index', '3');

    }

    var showScene = function() {
    	$('#attract').addClass('fade').removeClass('in').css('z-index', '0');
    }


    var checkScreen = function() {
        if(window.innerHeight > window.innerWidth) {
            $('#checkscreen').removeClass('fade').addClass('in');
        } else {
            $('#checkscreen').addClass('fade').removeClass('in');
        }
    }


    return {
        init: init,
        showAttract: showAttract,
        checkScreen: checkScreen
    }
})();
