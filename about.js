
const sections = document.querySelectorAll(".js-animation");
// const jsSection = document.querySelectorAll(".js-section");
// console.log(section)

const animateElement = (element) => {
    const jsSection = element.querySelectorAll(".js-section");
    jsSection.forEach(section => {
        const direction = section.dataset.animate;
        let translate;
        let translateInY;
        if (direction === "left") {
            translate = "-100%";
            translateInY = 0;
        } else if (direction === "right") {
            translate = "100%";
            translateInY = 0;
        } else if (direction === "top") {
            translateInY = "100%";
            translate = 0;
        } else if (direction === "bottom") {
            translateInY = "-100%";
            translate = 0;
        }
        // console.log(translateInY)
        let t1 = gsap.timeline();
        t1.from(section, {
            opacity: 0,
            x: translate,
            y: translateInY,
            duration: 1,
            ease: "linear"
        })
    })
    // const left = element.querySelector("[data-animate=left]");
    // const right = element.querySelector("[data-animate=right]");
    // const top = element.querySelector("[data-animate=top]");
    // const bottom = element.querySelector("[data-animate=bottom]");
    // const t1 = gsap.timeline();
    // t1.from(left, {
    //     opacity: 0,
    //     x: "-100%",
    //     duration: 1,
    //     ease: "linear"
    // }).from(right, {
    //     opacity: 0,
    //     x: "100%",
    //     duration: 1,
    //     ease: "linear"
    // }).from(top, {
    //     opacity: 0,
    //     y: "-100%",
    //     duration: 1,
    //     ease: "linear"
    // }).from(bottom, {
    //     opacity: 0,
    //     y: "100%",
    //     duration: 1,
    //     ease: "linear"
    // });

}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("is intersecting...")
            console.log(entry.target);
            animateElement(entry.target);
        }
    })
}, {
    // threshold: 1.0
    threshold: 0.5
    // rootMargin: "0px 0px -300px 0px"
})

sections.forEach(section => {
    observer.observe(section);
});
const typeWritter = document.querySelector(".typeWritter");
const formattedText = typeWritter.textContent.trim().replace(/\s+/g, ' ');

console.log(formattedText);
// console.log(typeWritter.textContent.trim());
gsap.to(typeWritter, {
    duration: 2,
    text: "This is the new text",
    ease: "linear",
    repeat: -1,
    yoyo: true
})
let text = ["I'm a developer", "I'm a react developer"];

let splitText = new SplitType(".splitText")
console.log(splitText.chars)
gsap.from(splitText.chars, {
    opacity: 0,
    y: "-100%",
    stagger: 0.5,
    ease: "back"
})