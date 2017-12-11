
function api_setIntelligentAuto(callback){		

	var successCb = function (){
		callback("setIntelligentAuto success");		
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
	signage.setIntelligentAuto(successCb, failureCb, options);
}