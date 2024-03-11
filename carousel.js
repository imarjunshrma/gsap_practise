const carousel = document.querySelector(".carousel");
const carouselTrack = carousel.querySelector(".carousel__track");
const carouselSlides = carousel.querySelectorAll(".carousel__slide");
const prevButton = carousel.querySelector(".carousel__prev");
const nextButton = carousel.querySelector(".carousel__next");
const slideWidth = carouselSlides[0].clientWidth;
const totalSlides = carouselSlides.length;
const pillsContainer = carousel.querySelector(".carousel__pills");
const pills = pillsContainer.querySelectorAll(".carousel__pill");
const carouselProgress = carousel.querySelector(".carousel__progress");
const carouselProgressBar = carouselProgress.querySelector(".carousel__progressBar");
let activeIndex = 0;
let isClicked = false;
const stepsMinWidth = Math.round(carouselProgress.clientWidth / (totalSlides - 1));
carouselSlides.forEach((slide, index) => {
    slide.dataset.index = index;
    if (index === 0) {
        slide.dataset.active = true;
    } else {
        slide.dataset.active = false;
    }
    prevButton.disabled = true;
    nextButton.disabled = false;
})
const setActiveSlide = (activeIndex) => {
    carouselSlides.forEach((slide, index) => {
        if (activeIndex == index) {
            slide.dataset.active = true;
        } else {
            slide.dataset.active = false;
        }
    })
}
const updateButtons = (activeIndex) => {
    if (activeIndex === 0) {
        prevButton.disabled = true;
        nextButton.disabled = false;
    } else if (activeIndex === totalSlides - 1) {
        prevButton.disabled = false;
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}
const updatePills = (activeIndex) => {
    pills.forEach((pill, index) => {
        if (activeIndex === index) {
            pill.ariaSelected = true;
        } else {
            pill.ariaSelected = false;
        }
    })
}
const updateProgressBar = (activeIndex) => {
    console.log(activeIndex)
    const width = stepsMinWidth * activeIndex;
    carouselProgressBar.style.width = `${width}px`
}
const scrollSlides = (e) => {
    // console.log(e);
    // console.log("scroll...")
    if (isClicked) return;
    const currentIndex = Math.round(carouselTrack.scrollLeft / slideWidth);
    if (currentIndex !== activeIndex) {
        activeIndex = currentIndex;
        setActiveSlide(currentIndex);
        updateButtons(activeIndex);
        updatePills(activeIndex);
        updateProgressBar(activeIndex);
    }
}
const setSlidesPosition = (activeIndex) => {
    carouselSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${100 * activeIndex}%)`
    })
}
prevButton.addEventListener("click", () => {
    if (activeIndex === 0) return;
    // console.log("..prev")
    isClicked = true;
    // carouselTrack.scrollLeft = carouselTrack.scrollLeft - slideWidth;
    activeIndex = activeIndex - 1;
    setSlidesPosition(activeIndex);
    setActiveSlide(activeIndex);
    updateButtons(activeIndex);
    updatePills(activeIndex);
    updateProgressBar(activeIndex);
    isClicked = false;
});
nextButton.addEventListener("click", () => {
    if (activeIndex === totalSlides - 1) return;
    // console.log("..next")
    isClicked = true;
    // carouselTrack.scrollLeft = carouselTrack.scrollLeft + slideWidth;
    activeIndex = activeIndex + 1;
    setSlidesPosition(activeIndex);
    setActiveSlide(activeIndex);
    updateButtons(activeIndex);
    updatePills(activeIndex);
    updateProgressBar(activeIndex);
    isClicked = false;
});
// carouselTrack.addEventListener("scroll", scrollSlides);