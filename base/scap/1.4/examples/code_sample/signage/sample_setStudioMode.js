
function api_setStudioMode(callback){		

	var successCb = function (){
		callback("setStudioMode success");		
	};

	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	var options = {
		enabled : true
	};  
	
	var signage = new Signage();
	signage.setStudioMode(successCb, failureCb, options);
}