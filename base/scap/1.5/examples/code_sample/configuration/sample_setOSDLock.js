function api_setOSDLock (callback) {
	var options = {
     enabled : true
    };

    function successCb() {
    	callback("setOSDLock success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }
		
	new Configuration().setOSDLock(successCb, failureCb, options);
}