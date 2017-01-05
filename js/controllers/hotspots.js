Hotspots = (function() {
    var init = function() {
        setIndex();
        bindEvents();
    }
    

    var setIndex = function() {
        var settingsString = getParameterByName('setting');
        var settingsArray = settingsString.split(',');
        if (settingsString.length == 0 || settingsString == null) {
            setDefaultScene();
            sendGAEvent('settings' + settingsArray);
        } else {
            $('#chair img:eq(' + validateSettings(settingsArray[0]) + ')').addClass('active in').removeClass('hidden fade');
            $('#fireplace img:eq(' + validateSettings(settingsArray[1]) + ')').addClass('active in').removeClass('hidden fade');
            $('#mantel img:eq(' + validateSettings(settingsArray[2]) + ')').addClass('active in').removeClass('hidden fade');
            $('#mantelGarland img:eq(' + validateSettings(settingsArray[3]) + ')').addClass('active in').removeClass('hidden fade');
            $('#pet img:eq(' + validateSettings(settingsArray[4]) + ')').addClass('active in').removeClass('hidden fade');
            $('#table img:eq(' + validateSettings(settingsArray[5]) + ')').addClass('active in').removeClass('hidden fade');
            $('#tree img:eq(' + validateSettings(settingsArray[6]) + ')').addClass('active in').removeClass('hidden fade');
            sendGAEvent('settings' + settingsArray);
        }
    }

    var setDefaultScene = function() {
        $('#chair img:eq(0)').addClass('active in').removeClass('hidden fade');
        $('#fireplace img:eq(0)').addClass('active in').removeClass('hidden fade');
        $('#mantel img:eq(0)').addClass('active in').removeClass('hidden fade');
        $('#mantelGarland img:eq(0)').addClass('active in').removeClass('hidden fade');
        $('#pet img:eq(0)').addClass('active in').removeClass('hidden fade');
        $('#table img:eq(0)').addClass('active in').removeClass('hidden fade');
        $('#tree img:eq(0)').addClass('active in').removeClass('hidden fade');
    }


    var validateSettings = function(setting) {
        if (setting >= 0 && setting <= 2) {
            return setting;
        } else {
            return 0;
        }
    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
        $(document).on('click tap', '#twitter', sendToTwitter);
        $(document).on('click tap', '#facebook', sendFacebook);
        $(document).on('click tap', '#company', openIM);
        $(document).on('click tap', '#info', Modal.showAttract);
    }

    var nextImg = function() {
    	if($(this).hasClass('active')) {
    		$(this).removeClass('active').addClass('fade').removeClass('in').addClass('hidden');
    		if($(this).next().length > 0) {
    			$(this).next().addClass('active').removeClass('hidden').removeClass('fade').addClass('in');
    			
    		} else {
    			$(this).parent().find('img').first().addClass('active').removeClass('hidden').removeClass('fade').addClass('in');
    		}
    		
    	}
    }


	var myArray = [];

    var chairIndex, fireplaceIndex, mantelIndex, mantelGarlandIndex, petIndex, tableIndex, treeIndex;
   

    var getIndex = function() {
       

    	chairIndex = $('#chair img.active').index();
    	fireplaceIndex = $('#fireplace img.active').index();
    	mantelIndex = $('#mantel img.active').index();
    	mantelGarlandIndex = $('#mantelGarland img.active').index();
    	petIndex = $('#pet img.active').index();
    	tableIndex = $('#table img.active').index();
    	treeIndex = $('#tree img.active').index();

    	if (myArray === !undefined || myArray.length > 0) {
    		myArray.splice(1, 7, chairIndex, fireplaceIndex, mantelIndex, mantelGarlandIndex, petIndex, tableIndex, treeIndex);
    	} else {
    		myArray.push(chairIndex, fireplaceIndex, mantelIndex, mantelGarlandIndex, petIndex, tableIndex, treeIndex);
    	}
    }

    var facebooklink = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.protocol + "//" + window.location.host + window.location.pathname + '?setting=' + myArray;

   

    var sendTweet = function() {
        getIndex();
        var twitterlink = 'https://twitter.com/home?status=Check%20out%20my%20custom%20New%20Year%E2%80%99s%20scene%20%26%20design%20your%20own%202017%20with%20%40InteractiveMech%20%23happynewyear%20%23newyeardoyou%0A' + window.location.protocol + "//" + window.location.host + window.location.pathname + '?setting=' + myArray;
        window.open(twitterlink,'_blank');
        sendToTwitter();
    }

    var sendFacebook = function() {
        getIndex();
        var facebooklink = window.location.protocol + "//" + window.location.host + window.location.pathname + '?setting=' + myArray;
    
         $.getJSON(
            "http://api.bitly.com/v3/shorten?callback=?", 
            { 
                "format": "json",
                "apiKey": 'R_30cf111a2946e769b75c67455f4b0f07',
                "login": 'o_1amtpj9r2u',
                "longUrl": facebooklink
            },
            function(response)
            {
                openFbLink(response.data.url);
                console.log(response);
            }
        );
    }

    function openFbLink(shorten_url) {
    var url = "https://www.facebook.com/sharer/sharer.php?u=" + shorten_url;
    window.open(url,'_blank');

    }

    var openIM = function() {
        window.open('http://www.interactivemechanics.com', '_blank');
    }

    var updateURL = function() {
    	var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?setting=' + myArray;
        window.history.pushState({path:newurl},'',newurl);
    }

    function sendToTwitter() {
    getIndex();
     var twitterlink = window.location.protocol + "//" + window.location.host + window.location.pathname + '?setting=' + myArray;
    console.log(twitterlink);

        $.getJSON(
            "http://api.bitly.com/v3/shorten?callback=?", 
            { 
                "format": "json",
                "apiKey": 'R_30cf111a2946e769b75c67455f4b0f07',
                "login": 'o_1amtpj9r2u',
                "longUrl": twitterlink
            },
            function(response)
            {
                openTwitterLink(response.data.url);
                console.log(response);
            }
        );
    }

    function openTwitterLink(shorten_url) {
    var url = "https://twitter.com/home?status=Check%20out%20my%20custom%20New%20Year%E2%80%99s%20scene%20%26%20design%20your%20own%202017%20with%20%40InteractiveMech%20%23happynewyear%20%23newyeardoyou%0A" + shorten_url;
    window.open(url,'_blank');
}
    







    

    return {
        init: init
    }
})();
