const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const share = document.getElementById('share-button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        // hi err
        console.log(err)
    }
 }

share.addEventListener('click', selectMediaStream);
button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})
// // On load
// selectMediaStream();