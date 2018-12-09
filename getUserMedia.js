// get audio and Video

var getMedia = navigator.mediaDevices.getUserMedia({ audio: true, video: true});

// once permission is granted

getMedia.then(function(mediaStream) {
    // display local video in HTML video element
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(mediaSream);
});

// if user blocks permission

p.catch(function(err) {
    // alert user
    alert('Permssion not granted');
});