function api_setOSDLanguage (callback) {
	var options = {
	 specifier : "ko-KR"
	}; 

    function successCb() {
    	callback("setOSDLanguage success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }
		
	new Configuration().setOSDLanguage(successCb, failureCb, options);
}