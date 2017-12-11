function api_setVirtualKeyboardLanguage (callback) {
	var options = {
     languageCodeList : ["fr", "es", "ko"]
    };   


    function successCb() {
    	callback("setVirtualKeyboardLanguage success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }
		
	new Configuration().setVirtualKeyboardLanguage(successCb, failureCb, options);
}