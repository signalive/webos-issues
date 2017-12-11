function api_getOSDLanguage (callback) {
  function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	conf = new Configuration();
	conf.getOSDLanguage(successCb, failureCb);
}