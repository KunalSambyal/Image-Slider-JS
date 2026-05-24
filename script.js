const imageList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const imageTag = document.getElementById("image");
const imageNavButtons = document.querySelectorAll(".imageNavButtons");
let currentIndex = 0;

function changeImage(path) {
    imageTag.src = `/${path}`;
}

function checkForIndex(indexToCheck) {
    if (indexToCheck >= imageList.length) {
        return 0;
    }
    if (indexToCheck < 0) {
        return imageList.length - 1;
    }
    return indexToCheck;
}

function nextImage() {
    currentIndex++;
    currentIndex = checkForIndex(currentIndex);
    changeImage(imageList[currentIndex]);
}

function prevImage() {
    currentIndex--;
    currentIndex = checkForIndex(currentIndex);
    changeImage(imageList[currentIndex]);
}

imageNavButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.id === "rightImageButton") {
            nextImage();
        }
        if (event.target.id === "leftImageButton") {
            prevImage();
        }
    });
});

imageNavButtons.forEach((button) => {
    button.addEventListener("keydown", (event) => {
        if (event.key.startsWith("Arrow")) {
            switch (event.key) {
                case "ArrowRight":
                    nextImage();
                    break;
                case "ArrowLeft":
                    prevImage();
                    break;
            }
        }
    });
});

function initializeSlider() {
    setInterval(nextImage, 4000);
}

document.addEventListener("DOMContentLoaded", initializeSlider);
