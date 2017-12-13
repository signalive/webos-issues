// Series
describe('SCAP 1.2', function() {
    this.timeout(DOWNLOAD_TIMEOUT);
    var Storage = cordova.require('cordova/plugin/storage/1.2');
    var storage = new Storage();

    for (var i = 1; i <= DOWNLOAD_TEST_COUNT; i++) {
        it('should download file #' + i, function(done) {
            storage.copyFile(
                function() { done(); },
                function(err) { done(err); },
                {
                    source: FILE_URL,
                    destination: 'file://internal/media.mp4'
                }
            );
        });
    }
});


describe('SCAP 1.3', function() {
    this.timeout(DOWNLOAD_TIMEOUT);
    var Storage = cordova.require('cordova/plugin/storage/1.3');
    var storage = new Storage();

    for (var i = 1; i <= DOWNLOAD_TEST_COUNT; i++) {
        it('should download file #' + i, function(done) {
            storage.copyFile(
                function() { done(); },
                function(err) { done(err); },
                {
                    source: FILE_URL,
                    destination: 'file://internal/media.mp4'
                }
            );
        });
    }
});


describe('SCAP 1.4', function() {
    this.timeout(DOWNLOAD_TIMEOUT);
    var Storage = cordova.require('cordova/plugin/storage/1.4');
    var storage = new Storage();

    for (var i = 1; i <= DOWNLOAD_TEST_COUNT; i++) {
        it('should download file #' + i, function(done) {
            storage.copyFile(
                function() { done(); },
                function(err) { done(err); },
                {
                    source: FILE_URL,
                    destination: 'file://internal/media.mp4'
                }
            );
        });
    }
});

