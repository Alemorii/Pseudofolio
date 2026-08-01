console.log('holamundo');
ScrollReveal().reveal('.about-box',{ delay: 100 });
ScrollReveal().reveal('.about-character',{ delay: 100 });

const sprite = document.getElementById("sprite");

const laugh = new Audio("../media/laugh.mp3");

sprite.addEventListener("click", () => {
    laugh.currentTime = 0;
    laugh.play();
});