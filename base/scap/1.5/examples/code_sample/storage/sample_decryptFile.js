function api_decryptFile(callback){
    var successCb = function(cbObject) {
        Debug_Log("Success");

    };

    var failureCb = function(cbObject) {
        var errorText = cbObject.errorText;
        Debug_Log("Failure : " + "Error Code [" + errorCode + "]: " + errorText, true);
    };

    var Params = {
        cipher_mode : "aes-256-cbc",
        password : "test",
        inputPath : "file://internal/test_enc.mp4",
        outputFileName : "test.mp4"
    };

    var storage = new Storage();
    storage.decryptFile(successCb, failureCb, Params);
}