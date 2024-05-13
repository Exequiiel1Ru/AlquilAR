const images = [
    "../img/carilo1.jpg",
    "../img/mardelplata1.jpg",
    "../img/mardelaspampas1.jpg",
    "../img/pinamar1.jpg"
    
];

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    fadeIn(document.getElementById("img1"), images[currentImageIndex]);
    fadeIn(document.getElementById("img2"), images[(currentImageIndex + 1) % images.length]);
    fadeIn(document.getElementById("img3"), images[(currentImageIndex + 2) % images.length]);
    fadeIn(document.getElementById("img4"), images[(currentImageIndex + 3) % images.length]);

}

function fadeIn(element, imageUrl) {
    const tempImage = new Image();
    tempImage.onload = function() {
        element.src = imageUrl;
        element.style.opacity = 0;
        let opacity = 0;
        const fadeInterval = setInterval(function() {
            opacity += 0.05;
            element.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeInterval);
        }, 50);
    };
    tempImage.src = imageUrl;
}

setInterval(changeImage, 5000);
