// background.js

// Retrieve current YouTube URL.
chrome.browserAction.onClicked.addListener(function (tab) {

    let videoID = "";
    let ampersandPos = "";

    if (tab.url !== undefined) {
        // Only valid URLs should paste.
        console.log('Current URL: ' + tab.url);

        // Extract the video URL
        videoID = tab.url.split('v=')[1];
        ampersandPos = videoID.indexOf('&');
        if (ampersandPos !== -1) {
            videoID = videoID.substring(0, ampersandPos);
        }
        console.log('Video ID: ' + videoID);

        // Any code we wanna execute can happen here.
        // chrome.tabs.executeScript({
        //     code: 'document.body.style.backgroundColor="red"'
        // });
    }
});


// This file will do the heavy work of calling YouTube and Spotify APIs.

//
// const videoID = "";
// const apiKey = "AIzaSyC3TTJ65ThTm_l-SCbdGWYwaXhlH6vuk8k";
// const url = "https://www.googleapis.com/youtube/v3/videos";
//

// TODO: How should we get the song?
/**
 * We'll need to add a button or maybe clicking the extension itself will grab the current URL (for channel ID).
 * Once we grab the channel ID, we'll need to find the current playing video (music video or song).
 * After the song is determined, we can find this song in Spotify and add it to a playlist on Spotify.
 *
 * UPDATE: We'll actually need the video ID which is appended to the URL of the video you're watching. Here's a ref:
 * https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/videos/list
 *
 * UPDATE: We should be able to use the "Click Chrome Extension Icon" to retrieve the video ID of the current video playing
 * From there we can get the "Title" or the "Tags" or some kind of metric to find the song in Spotify.
 * Ideally we should prompt user, if not found, enter Artist + Song.
 */
// function getCurrentSong() {}
// function createPlaylist() {}