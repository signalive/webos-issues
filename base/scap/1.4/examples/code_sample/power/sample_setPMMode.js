

function api_setPMMode(callback){
	
    var options = {};
    options.mode = Power.PMMode.PowerOff;
	
    function successCb() {
    	callback("setPMMode success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().setPMMode(successCb, failureCb, options);
}