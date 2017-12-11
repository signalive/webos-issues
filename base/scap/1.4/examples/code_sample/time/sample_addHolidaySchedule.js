
function api_addHolidaySchedule(callback){
	
	var options = {
		startMonth : 3,
		startDay : 7,
		endMonth : 3,
		endDay : 9 //ex. 3/7~3/9
	};  

	function successCb() {
		callback("addHolidaySchedule success");
	}

	function failureCb(cbObject) {
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;

		console.log ("Error Code [" + errorCode + "]: " + errorText);
		callback(cbObject);
	}

	new Time().addHolidaySchedule(successCb, failureCb, options);
}