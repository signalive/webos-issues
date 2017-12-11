
function api_delAllHolidaySchedules(callback){
	
	function successCb() {
		callback("delHolidaySchedule success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Time().delAllHolidaySchedules(successCb, failureCb);
}