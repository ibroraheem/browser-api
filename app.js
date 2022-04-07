//Variable declaration
const loc = document.getElementById("demo");
const video = document.getElementById("videoElement");
const audio = document.getElementById("audioElement");

//Get location function
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser";
    }
}
//Display location function
function showPosition(position) {
    loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude;
}

//Display Video Function
function showFace() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                video.innerHTML = "Camera not supported by this browser";
            })
    }
}

//Audio function

function listenToMe(){
    if (navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({audio: true})
        .then(function (stream) {
            audio.srcObject = stream;
        })
        .catch(function (error) {
            audio.innerHTML = "Microphone not supported by this browser";
        })
    }
}