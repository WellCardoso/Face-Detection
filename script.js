const video = document.getElementById('video');

function startVideo(){
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = stream,
        error => console.error(error)
    )
}

function stopVideo(){
    navigator.getUserMedia(
        {video: {}},
        video.srcObject = null,
        error => console.log(error)
    )
}