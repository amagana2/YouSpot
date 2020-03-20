/**
 * This file is the "injected" script which can control anything on the page as long as it is valid!
 * This is where we will be calling APIs and returning the proper responses to the user.
 */

// Process the incoming YouTube URL.
function getYoutubeVideoInfo() {
    const API_KEY = "AIzaSyC3TTJ65ThTm_l-SCbdGWYwaXhlH6vuk8k";

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

        // Split YouTube URL
        let video_id = message.split('v=')[1];
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition !== -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }

        // Call YouTube API w/ Video ID
        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video_id}&key=${API_KEY}`;
        console.log("Calling YouTube...");
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("Response:");
                console.log(res);
            });
    });
}

getYoutubeVideoInfo();