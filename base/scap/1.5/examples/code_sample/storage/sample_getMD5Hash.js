function api_getMD5Hash(callback){
    var successCb = function(cbObject) {
        Debug_Log("Success : " + "MD5Hash [" + cbObject.md5hash + "]: ");
    };

    var failureCb = function(cbObject) {
        var errorText = cbObject.errorText;
        Debug_Log("Failure : " + "Error Code [" + errorCode + "]: " + errorText, true);
    };

    var listOption = {
        filePath : file://internal/test.txt"
    };

    var storage = new Storage();
    storage.getMD5Hash(successCb, failureCb, listOption);
}