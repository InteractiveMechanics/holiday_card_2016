Hotspots = (function() {
    var init = function() {
        bindEvents();
    }
    
    
    var bindEvents = function() {
        $(document).on('click tap', '.chair', nextImg);
        $(document).on('click tap', '.fireplace', nextImg);
        $(document).on('click tap', '.mantel', nextImg);
        $(document).on('click tap', '.mantelGarland', nextImg);
        $(document).on('click tap', '.pet', nextImg);
        $(document).on('click tap', '.table', nextImg);
        $(document).on('click tap', '.tree', nextImg);
        
    }

    var nextImg = function() {
    	if($(this).hasClass('active')) {
    		$(this).removeClass('active').addClass('fade').addClass('hidden');
    		if($(this).next().length > 0) {
    			$(this).next().addClass('active').removeClass('hidden').removeClass('fade').addClass('in');
    		} else {
    			$(this).parent().find('img').first().addClass('active').removeClass('hidden').removeClass('fade').addClass('in');
    		}
    		
    	}
    }

    

    return {
        init: init
    }
})();
