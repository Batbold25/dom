var currentIndex = 0;
var totalImages = document.querySelectorAll('#imgContainer img').length;
var btnleft = document.getElementById("left");
console.log(btnleft);

var btnRight = document.getElementById("right");
console.log(btnRight);

function updateCarousel() {
    var imageContainer = document.getElementById('imgContainer');
    var translateValue = -currentIndex * 100 + '%';
    imageContainer.style.transform = 'translateX(' + translateValue + ')';
}

btnleft.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

btnRight.addEventListener("click", () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        updateCarousel();
    }
})