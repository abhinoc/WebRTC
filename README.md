src:- https://www.html5rocks.com/en/tutorials/getusermedia/intro/
      https://www.html5rocks.com/en/tutorials/webrtc/basics/
getUserMedia() is related to WebRTC because it's the gateway into that set of APIs. It provides the means to access the user's local camera/microphone stream.

With navigator.getUserMedia(), we can tap into webcam and microphone input without a plugin.


Feature detection

Feature detection is a simple check for the existence of navigator.getUserMedia:

function hasGetUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
    // Good to go!
}  else {
    alert('getUserMedia() is not supported in your browser');
}

You can also use Mordernizr to detect getUserMedia to avoid the vendor prefix 

if (Modernizr.getusermedia) {
    var gUM = Modernizr.prefixed('getUserMedia', navigator);
    gUM({video: true}, function ( // ...))
}



Gaining access to an input device

To use the webcam or microphone, we need to request permission.
The first parameter to getUserMedia() is an object specifying the details and requirements for each type of media you want to access.
For example, if you want to access the webcam, the first parameter should be {video: true}.
To use both microphone and camera, pass {video: true, audio: true}:


<video autoplay></video>

<script>
    var errorCallback = function(e) {
        console.log('Rejected', e);
    };
    
    // Not showing vendor prefixes.
    navigator.getUserMedia({video: true, audio: true},
    function(localMediaStream) {
        var video = document.querySelcetor('video');
        video.src = window.URL.createObjectURL(localMediaStream);
        
        // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia 
        // see crbug.com/110938
        video.onloadedmetadata = function(e) {
            // Ready to go. Do some stuff.
        };
    }, errorCallback);
</script>

    