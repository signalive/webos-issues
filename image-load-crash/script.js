var contentLength = 0;
var i = 0;

var downloadLinks = [
    'https://static.ommasign.com/~7/medias/64u3ae9g60r38e9q74tkc/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60rk2e1h6gwk4/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60w38e1t64wkc/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60w3jc1n74r34/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60r3gdtq74r38/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wk0dhg74t3g/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wk0chg6crk0/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60vkedhh60rk0/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wk8d1n6ct3c/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkac1g6gu3c/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wk6e1q64u3e/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae1t74wkje9r70r32/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkad9q64rkj/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkce9h64tke/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkje1p64t3c/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkee1j68wkj/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkcd1r6cvka/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkgdtm6rukg/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wkgcht68u30/processed-hd.png',
    'https://static.ommasign.com/~7/medias/64u3ae9g60wked1h68v36/processed-hd.png'
];

var links = downloadLinks.map(function(link, i) {
    return 'http://127.0.0.1:9080/' + i + '.png';
    // return './content/' + i + '.png';
});

var contentContainerEl = document.querySelector('#content-container');


function main() {
    console.log('Downloading files...');
    overlay.innerHTML = 'Downloading...';

    downloadAll()
        .then(function() {
            overlay.innerHTML = 'Downloaded!';
            console.log('Downloaded, starting to play');
            go();
        })
        .catch(function(err) {
            console.error(err);
        });
}
main();


// Broken
function go() {
    var link = links[i % links.length];

    var imageEl = new Image();
    contentContainerEl.innerHTML = '';
    contentContainerEl.appendChild(imageEl);

    (function(i) {
        imageEl.onload = function() {
            console.log('Image #' + i + ' loaded');
            overlay.innerHTML = 'Image #' + i;
            go();
        };
    })(i);

    imageEl.onerror = function() {
        console.error('Image could not loaded', imageEl.error);
    };

    imageEl.src = link;
    i++;
}

// Workaround
// function go() {
//     var link = links[i % links.length];
//     var imageEl = new Image();

//     (function(i) {
//         imageEl.onload = function() {
//             contentContainerEl.innerHTML = '';
//             contentContainerEl.appendChild(imageEl);
//             console.log('Image #' + i + ' loaded');
//             overlay.innerHTML = 'Image #' + i;
//             go();
//         };
//     })(i);

//     imageEl.onerror = function() {
//         console.error('Image could not loaded', imageEl.error);
//     };

//     imageEl.src = link;
//     i++;
// }


function downloadAll() {
    var tasks = downloadLinks.map(function(link, i) {
        return download(link, i + '.png');
    });
    return Promise.all(tasks);
}


function download(src, dst) {
    return new Promise(function(resolve, reject) {
        var storage = new Storage();
        storage.copyFile(resolve, reject, {
            source: src,
            destination: 'file://internal/' + dst
        });
    });
}
