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
        $(document).on('click tap', '#testingBtn', getIndex);
        
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


    var updateQueryStringParameter = function(uri, key, value){
	  	var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	  	var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	  	if (uri.match(re)) {
	    	return uri.replace(re, '$1' + key + "=" + value + '$2');
	  	} else {
	    	return uri + separator + key + "=" + value;
	  	}
	}




    var chairIndex = $('#chair img.active').index();
    var fireplaceIndex = $('#fireplace img.active').index();
    var mantelIndex = $('#mantel img.active').index();

    var getIndex = function() {
    	alert(chairIndex);
    	alert(fireplaceIndex);
    	alert(mantelIndex);
    }






    

    return {
        init: init
    }
})();
