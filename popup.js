// popup.js
/**
 * This file controls the "popup" HTML's javascript. This does not do any processing of the page you're on.
 * In order to process the current page (not the popup), you'll need to call 'executeScript' for content_script.js.
 */

// Open Settings Page.
function getSettingsPage() {
    // TODO: Implement settings page.
}

document.getElementById('settings_click').addEventListener('click', getSettingsPage);

// Call Youtube API for video info.
function getVideoInfo() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"}, function () {
            chrome.tabs.sendMessage(tabs[0].id, tabs[0].url); // Send the current YouTube URL.
        });
    });
}

document.getElementById('button_click').addEventListener('click', getVideoInfo);


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