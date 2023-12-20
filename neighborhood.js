// JavaScript array holding paths to the images
var images = [
    "bndcam/IMG_0089.JPG",
    "bndcam/IMG_0103.JPG",
    "bndcam/IMG_0104.JPG",
    "bndcam/IMG_0105.JPG",
    "bndcam/IMG_0126.JPG",
    "bndcam/IMG_0127.JPG",
    "bndcam/IMG_0128.JPG",
    "bndcam/IMG_0140.JPG",
    "bndcam/IMG_0141.JPG",
    "bndcam/IMG_0161.JPG",
    "bndcam/IMG_0162.JPG",
    // ... other image paths
];
var currentImageIndex = 0;

// Function to show the previous image
document.getElementById('prev-button').onclick = function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('changeable-image').src = images[currentImageIndex];
};

// Function to show the next image
document.getElementById('next-button').onclick = function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('changeable-image').src = images[currentImageIndex];
};

function toggleFlipBook(show) {
    var flipbookContainer = document.getElementById('flipbook-container');
    flipbookContainer.style.display = show ? 'block' : 'none';
}

function goBackHome() {
    window.location.href = 'boysserenade.html'; // Replace with your homepage path
  }
  
function showImage(imagePath) {
    // Update the source of the image to be displayed
    document.getElementById('displayed-image').src = imagePath;
    // Show the image display container
    document.getElementById('image-display').style.display = 'block';
}

function hideImage() {
    // Hide the image display container
    document.getElementById('image-display').style.display = 'none';
    // Optionally clear the source of the image
    document.getElementById('displayed-image').src = '';
}
