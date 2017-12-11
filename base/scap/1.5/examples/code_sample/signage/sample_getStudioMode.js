
function api_getStudioMode(callback){
	function successCb(cbObject) {
		console.log("cbObject : " + JSON.stringify(cbObject));
		callback(cbObject);
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}
		
	var signage = new Signage();	
	signage.getStudioMode(successCb, failureCb);	
}