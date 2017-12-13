var DOWNLOAD_TEST_COUNT = 5;
var DOWNLOAD_TIMEOUT = 600000;
var CLEANUP_TIMEOUT = 600000;
var FILES = [
    {
        title: 'toystory.mp4 (id: #326, size: 11.6 MB)',
        url: 'https://s3.eu-central-1.amazonaws.com/signalive.test.preserved/~1/medias/64u3cchq74u3achm70w3e/processed-ls.mp4'
    },
    {
        title: 'original.mp4 (id: #442, size: 57.2 MB)',
        url: 'https://s3.eu-central-1.amazonaws.com/signalive.test.preserved/~1/medias/64u3ec9k6mwk2chq6gvkc/processed-ls.mp4'
    }
];


var storageUsageWatcher = new StorageUsageWatcher();
var mochaEl = document.getElementById('mocha');
document.addEventListener('keydown', function(e) {
    e = e || window.event;
    var keyCode = e.which || e.keyCode;

    if (keyCode == 13) {
        location.reload();
        e.preventDefault();
    } else if (keyCode == 38) { // up
        mochaEl.scrollTop = Math.max(mochaEl.scrollTop - 200, 0);
        e.preventDefault();
    } else if (keyCode == 40) { // down
        mochaEl.scrollTop = Math.min(mochaEl.scrollTop + 200, mochaEl.scrollHeight);
        e.preventDefault();
    }
});


describe('Cordova', function() {
    it('should emit device ready', function(done) {
        this.timeout(5000);

        var onDeviceReady = function() {
            document.removeEventListener('deviceready', onDeviceReady, false);
            done();
        };

        document.addEventListener('deviceready', onDeviceReady, false);
    });
});


describe('Cleanup', function() {
    var Storage13 = cordova.require('cordova/plugin/storage/1.3');
    var storage13 = new Storage13();

    it('should clean files with "media" prefix', function(done) {
        this.timeout(CLEANUP_TIMEOUT);

        storage13.listFiles(
            function(data) {
                var fileUrisToBeDeleted = data.files
                    .filter(function(file) {
                        return file.type == 'file' && file.name.indexOf('media') == 0;
                    })
                    .map(function(file) {
                        return 'file://internal/' + file.name;
                    });

                var tasks = fileUrisToBeDeleted.map(function(uri) {
                    return function(callback) {
                        storage13.removeFile(
                            function() { callback(); },
                            function(err) { callback(err); },
                            { file: uri }
                        );
                    }
                });

                async.parallelLimit(tasks, 5, function(err, results) {
                    if (err) return done(err);
                    done();
                });
            },
            function(err) { done(err); },
            { path: 'file://internal' }
        );
    });

    it('should set debug mode on', function(done) {
        var Configuration13 = cordova.require('cordova/plugin/configuration/1.3');
        var configuration13 = new Configuration13();
        configuration13.debug(
            function() { done(); },
            function(err) { done(err); },
            { enabled: true }
        );
    });
});


for (var i = 1; i <= DOWNLOAD_TEST_COUNT; i++) {
    FILES.forEach(function(file, fileIndex) {
        describe('Download test #' + i + ' for ' + file.title, function() {
            this.timeout(DOWNLOAD_TIMEOUT);

            var Storage12 = cordova.require('cordova/plugin/storage/1.2');
            var Storage13 = cordova.require('cordova/plugin/storage/1.3');
            var Storage14 = cordova.require('cordova/plugin/storage/1.4');
            var storage12 = new Storage12();
            var storage13 = new Storage13();
            var storage14 = new Storage14();

            it('SCAP 1.2', function(done) {
                storageUsageWatcher.noProgressCallback = function() {
                    done(new Error('No progress!'));
                };

                storage12.copyFile(
                    function() { done(); },
                    function(err) { done(err); },
                    {
                        source: file.url,
                        destination: 'file://internal/media-' + (new Date().getTime()) + '.mp4'
                    }
                );
            });

            it('SCAP 1.3', function(done) {
                storageUsageWatcher.noProgressCallback = function() {
                    done(new Error('No progress!'));
                };

                storage13.copyFile(
                    function() { done(); },
                    function(err) { done(err); },
                    {
                        source: file.url,
                        destination: 'file://internal/media-' + (new Date().getTime()) + '.mp4'
                    }
                );
            });

            it('SCAP 1.4', function(done) {
                storageUsageWatcher.noProgressCallback = function() {
                    done(new Error('No progress!'));
                };

                storage14.copyFile(
                    function() { done(); },
                    function(err) { done(err); },
                    {
                        source: file.url,
                        destination: 'file://internal/media-' + (new Date().getTime()) + '.mp4'
                    }
                );
            });
        });
    });
}
