document.addEventListener('DOMContentLoaded', function() {
    function calculateDaysSince(date) {
        const kstOffset = 9 * 60 * 60 * 1000;
        const startDateUtc = new Date(date).getTime();
        const currentDateTime = new Date();
        const currentTimeUtc = currentDateTime.getTime() + (currentDateTime.getTimezoneOffset() * 60000);
        const currentKstTime = currentTimeUtc + kstOffset;
        const timeDiff = currentKstTime - startDateUtc;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return daysDiff;
    }

    function updateDayCounter() {
        const daysSince = calculateDaysSince('2023-05-29T00:00:00+0900');
        document.getElementById('day-counter').textContent = daysSince;
    }

    updateDayCounter();
    setInterval(updateDayCounter, 3600000);
});


function toggleTvPopup(show) {
    var popup = document.getElementById('tv-popup');
    var hamburgerButton = document.getElementById('hamburger-button');
    var closeButton = document.querySelector('.close-btn'); // Assuming this is the class for the close button

    popup.style.display = show ? 'block' : 'none';
    hamburgerButton.style.display = show ? 'block' : 'none';
    closeButton.style.display = show ? 'block' : 'none';

    // Also hide the sidebar when closing the popup
    if (!show) {
        document.getElementById('video-sidebar').style.display = 'none';
    }
}


// When the TV is clicked, show the popup and set the initial state of "bndtv" to the first image.
document.getElementById('popup-trigger').onclick = function() {
    document.getElementById('tv-border').src = 'bndtv3.png'; // Replace with your first image path
    toggleTvPopup(true);
};

// When the close button is clicked, hide the popup and stop the video.
document.querySelector('.close-btn').onclick = function() {
    toggleTvPopup(false);
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.pause(); // Pause the video
    videoPlayer.currentTime = 0; // Rewind the video
    videoPlayer.style.display = 'none'; // Hide the video player
    document.getElementById('tv-border').src = 'bndtv3.PNG'; // Set back to default image
};


// This function is called when a video title in the sidebar is clicked.
function changeVideo(videoFilePath) {
    // Change the "bndtv" image to the second one and show the video.
    document.getElementById('tv-border').src = 'bndtv2.png'; // Replace with your second image path
    var videoPlayer = document.getElementById('video-player');
    var source = videoPlayer.getElementsByTagName('source')[0];
    source.src = videoFilePath;
    videoPlayer.load(); // Load the new video file
    videoPlayer.style.display = 'block'; // Show the video player
    videoPlayer.play(); // Play the video
}


// This code sets up the click event for the hamburger button to toggle the sidebar.
document.getElementById('hamburger-button').addEventListener('click', function() {
    console.log('Hamburger button clicked'); // This should show up in the console
    var sidebar = document.getElementById('video-sidebar');
    var currentDisplay = sidebar.style.display;
    console.log('Current sidebar display:', currentDisplay); // Check the current display property
    sidebar.style.display = currentDisplay === 'none' ? 'block' : 'none';
});

function toggleFolder(folderId) {
    var folder = document.getElementById(folderId);
    if (folder) {
        var isDisplayed = folder.style.display === 'block';
        folder.style.display = isDisplayed ? 'none' : 'block';
    }
}
function toggleSubfolder(subfolderId, show) {
    var subfolder = document.getElementById(subfolderId);
    if (subfolder) {
        subfolder.style.display = show ? 'block' : 'none';
    }
}

