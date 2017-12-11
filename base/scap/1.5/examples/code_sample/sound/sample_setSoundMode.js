

function api_setSoundMode(callback){
	
	var options = {
		mode : Sound.SoundMode.Standard,
		balance : 20
	};


	function successCb() {
		callback("setSoundMode success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Sound().setSoundMode(successCb, failureCb, options);
}