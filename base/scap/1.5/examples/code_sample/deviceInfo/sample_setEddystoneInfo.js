function api_setEddystoneInfo(callback){
	
	function successCb() {                                                
	   console.log("successCb");   
	   callback("setEddystoneInfo success");
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
		frame : DeviceInfo.EddystoneFrame.URL,
		frameData : "http://www.lge.com"
	};
                                                    
	deviceInfo.setEddystoneInfo(successCb, failureCb, options);             

}