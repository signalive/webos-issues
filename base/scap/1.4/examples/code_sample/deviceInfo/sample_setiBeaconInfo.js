function api_setiBeaconInfo(callback){
	
	function successCb() {                                                
	   console.log("successCb");   
	   callback("setiBeaconInfo success");
	}                                                                     
	                                                                      
	function failureCb(cbObject) {                                        
	   var errorCode = cbObject.errorCode;                                
	   var errorText = cbObject.errorText;                                
	   console.log ("Error Code [" + errorCode + "]: " + errorText);     
	   
	   callback(cbObject);
	}                                                                     
	                                                                      
	var deviceInfo = new DeviceInfo();            
	
	var options = {
		enabled : true,
		uuid : "f7826da64fa24e988024bc5b71e0893e",
		major : 5000,
		minor : 3000
	};

	
    deviceInfo.setiBeaconInfo(successCb, failureCb, options);             

}