
function api_getExternalInputList(callback){
    function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));
        for (var i = 0; i < cbObject.inputSourceList.length; i++) {
            console.log("inputSourceList [" + i + "].inputPort : " + cbObject.inputSourceList[i].inputPort);
            console.log("inputSourceList [" + i + "].signalDetection : " + cbObject.inputSourceList[i].signalDetection);
        }
        console.log("subscribed : " + cbObject.subscribed);
        console.log("count : " + cbObject.count);
        console.log("currentInputPort : " + cbObject.currentInputPort);

        callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;

        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    var options = { subscribe : true };

    new DeviceInfo().getExternalInputList(successCb, failureCb, options);
}