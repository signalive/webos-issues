

function api_setHolidayScheduleMode(callback){
	
	var options = {
		enabled : true
	};  

	function successCb() {
		callback("setHolidayScheduleMode success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Time().setHolidayScheduleMode(successCb, failureCb, options);
}