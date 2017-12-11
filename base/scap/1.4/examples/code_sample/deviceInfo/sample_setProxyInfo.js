function api_setProxyInfo(callback){
	
	function successCb() {                                                
	   console.log("successCb");   
	   callback("setProxyInfo success");
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
		ipAddress : "163.231.22.43",
		password : "35792234",
		port : 5000,
		userName : "example"
    };
	
    deviceInfo.setProxyInfo(successCb, failureCb, options);             

}