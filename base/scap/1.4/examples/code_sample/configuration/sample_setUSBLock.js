function api_setUSBLock (callback) {
	var options = {
     enabled : true
    };

    function successCb() {
    	callback("setUSBLock success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }
		
	new Configuration().setUSBLock(successCb, failureCb, options);
}