

function api_setDPMWakeup(callback){
	
    var options = {};
    options.DPMSignalType = Power.DPMSignalType.CLOCK;

    function successCb() {
    	callback("setDPMWakeup success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().setDPMWakeup(successCb, failureCb, options);
}