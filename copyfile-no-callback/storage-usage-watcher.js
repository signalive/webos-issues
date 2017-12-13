var Storage = cordova.require('cordova/plugin/storage/1.3');
var usedTextElement = document.querySelector('#storage-watcher .used');
var totalTextElement = document.querySelector('#storage-watcher .total');

function StorageUsageWatcher(tickInterval, progressCheckTick, progressThreshold) {
    this.tickInterval = tickInterval || 1000;
    this.progressCheckTick = progressCheckTick || 30; // 30 seconds
    this.progressThreshold = progressThreshold || 100; // 100 KB
    this.noProgressCallback = function() {};

    this.scapStorage_ = new Storage();
    this.tickCount_ = 0;
    this.usedSpace_ = null;
    this.onTickInterval_ = setInterval(this.onTick_.bind(this), this.tickInterval);
}

StorageUsageWatcher.prototype.onTick_ = function() {
    var that = this;

    this.scapStorage_.getStorageInfo(
        function(data) {
            var usedInMB = (data.used / 1024).toFixed(1);
            var totalInMB = (data.total / 1024).toFixed(1);

            usedTextElement.textContent = usedInMB;
            totalTextElement.textContent = totalInMB;

            if (that.tickCount_ % that.progressCheckTick == 0) {
                if (that.usedSpace_ && (data.used - that.usedSpace_ < that.progressThreshold)) {
                    // Means no progress
                    that.noProgressCallback();
                }

                that.usedSpace_ = data.used;
            }

            that.tickCount_++;
        },
        function(err) {
            console.log('Could not get storage info', err);
            that.tickCount_++;
        }
    );
};
