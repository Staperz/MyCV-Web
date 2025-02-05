window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let hero = document.querySelector(".hero");
    let heroOverlay = document.querySelector(".hero::after"); // Select pseudo-element
    let heroTitle = document.querySelector(".hero h1");
    let content = document.querySelector(".content");

    // Fade out hero background, filter, and title as user scrolls
    let fadeOpacity = Math.max(1 - scrollTop / 300, 0); 
    hero.style.opacity = fadeOpacity;
    heroTitle.style.opacity = fadeOpacity;

    // Adjust filter fade effect
    hero.style.setProperty("--filter-opacity", fadeOpacity); 

    // Show content after the hero fades out
    if (scrollTop > window.innerHeight * 0.5) {
        content.style.opacity = 1;
    }

    // Reveal text boxes when they appear in viewport
    document.querySelectorAll(".text-box").forEach((box, index) => {
        let boxTop = box.getBoundingClientRect().top;
        let triggerHeight = window.innerHeight * 0.8;

        if (boxTop < triggerHeight) {
            setTimeout(() => {
                box.classList.add("show");
            }, index * 200);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".image-carousel");
    let index = 0;

    function slideImages() {
        const images = document.querySelectorAll(".image-carousel img");
        images.forEach((img, i) => {
            img.style.opacity = i === index ? "1" : "0";
            img.style.transform = i === index ? "scale(1.1)" : "scale(1)";
        });

        index = (index + 1) % images.length;
    }

    setInterval(slideImages, 3000); // Change every 3 seconds
    slideImages(); // Run initially
});
