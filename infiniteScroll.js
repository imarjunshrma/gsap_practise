
const t1 = gsap.timeline({ repeat: -1, repeatDelay: 0 });

t1.to(".images", { x: "-100%", duration: 10, ease: "linear", yoyo: true });


const images = document.querySelectorAll(".images");
const sliderSection = document.querySelector(".slider-section");
images.forEach(section => {
    section.addEventListener("mouseover", () => {
        sliderSection.classList.add("-mouseOver");
        t1.pause();
    })
    section.addEventListener("mouseout", () => {
        sliderSection.classList.remove("-mouseOver");
        t1.play();
    })
    section.addEventListener("drag", () => {
        sliderSection.classList.add("-grabbed");
    })
    section.addEventListener("dragend", () => {
        sliderSection.classList.remove("-grabbed");
    })
})


//
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slides");

// const moveSlides = () => {
//     slides.forEach((slide, index) => {
//         console.log(slide)
//         const newIndex = index + 1;
//         slide.style.transform = `translateX(-${newIndex * 100}%)`;
//     })
// }
// setInterval(() => {
//     moveSlides();
// }, 200)

// const t2 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
// t2.to(".slides", { x: "-100%", duration: 2, ease: "linear" })