
function api_delHolidaySchedule(callback){
	
	var options = {
		scheduleId : "d704"
	}; 

	function successCb() {
		callback("delHolidaySchedule success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Time().delHolidaySchedule(successCb, failureCb, options);
}