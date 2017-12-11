
function api_createToast(callback){

	var options = {
		msg : "test message"
	};  

	function successCb() {
		callback("createToast success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Utility().createToast(successCb, failureCb, options);
}