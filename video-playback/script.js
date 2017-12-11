window.onload = function() {
    var videoElement = insertVideoElement();
    console.log('Video was inserted');

    var debugElement = insertDebugView();
    console.log('Debug was inserted');

    addDebugViewItem('Initialized', debugElement);

    setTimeout(function() {
        startRandomPlaybackChange(videoElement, debugElement);
        addDebugViewItem('Initiating random playback-rate changes', debugElement);
    }, 5000);

};


function insertVideoElement() {
    var node = document.createElement('video');
    node.setAttribute('loop', true);
    node.setAttribute('autoplay', true);
    node.setAttribute('webkit-playsinline', 'webkit-playsinline');
    node.src = './medias/sample.mp4';

    node.style.width = window.innerWidth + 'px';
    node.style.height = window.innerHeight + 'px';

    document.body.appendChild(node);
    node.play();
    return node;
}

function insertDebugView() {
    var node = document.createElement('div');
    node.classList.add('debug-view');

    document.body.appendChild(node);

    return node;
}

function addDebugViewItem(content, view) {
    var node = document.createElement('div');
    node.classList.add('debug-view-item');
    node.innerHTML = content;

    view.prepend(node);

    return node;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function startRandomPlaybackChange(videoElement, debugElement) {
    var delay = getRandomArbitrary(3000, 6000);
    var playbackRate = 2 * Math.random() + 0.25;
    setTimeout(function() {
        videoElement.playbackRate = playbackRate;
        addDebugViewItem('playback-rate=' + playbackRate.toPrecision(4), debugElement);
        startRandomPlaybackChange(videoElement, debugElement);
    }, delay);
}