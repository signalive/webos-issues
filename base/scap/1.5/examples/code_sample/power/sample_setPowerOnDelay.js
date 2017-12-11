

function api_setPowerOnDelay(callback){
	
    var options = {};
    options.delayTime = 20;
	
    function successCb() {
    	callback("setPowerOnDelay success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().setPowerOnDelay(successCb, failureCb, options);
}