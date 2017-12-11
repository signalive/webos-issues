

function api_setSoundOut(callback){
	
	var options = {
		speakerType : Sound.SpeakerType.SignageSpeaker
	};

	function successCb() {
		callback("setSoundOut success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Sound().setSoundOut(successCb, failureCb, options);
}