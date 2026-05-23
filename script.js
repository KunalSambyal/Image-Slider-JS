const imageList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const imageTag = document.getElementById("image");
const imageNavButtons = document.querySelectorAll(".imageNavButtons");

console.log(imageTag.src);

function changeImage(path) {
    imageTag.src = `/${path}`;
}

let currentIndex = 0;

imageNavButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (String(event.target.id).startsWith("right")) currentIndex++;
        if (String(event.target.id).startsWith("left")) currentIndex--;

        if (currentIndex >= imageList.length) {
            currentIndex = 0;
        }
        if (currentIndex < 0) {
            currentIndex = imageList.length - 1;
        }
        changeImage(imageList[currentIndex]);
    });
});
