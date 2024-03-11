const parentSection = document.querySelector(".section");
const section = document.querySelector(".inner");
const circleContainer = document.querySelector(".circle");
const yellowSection = document.querySelector(".yellow");


const scrollObserver = (e) => {
    const top = section.getBoundingClientRect().top;
    const nextElement = section.nextElementSibling;
    const yellow = section.querySelector(".yellow");
    const height = section.offsetHeight;
    const offsetTop = section.offsetTop;
    const scrollY = window.scrollY;
    if (scrollY > offsetTop && scrollY < offsetTop + height - 400) {
        const totalHeight = section.getBoundingClientRect().height;
        const minScrollHeight = totalHeight / 7;
        const step = scrollY / minScrollHeight;
        if (step > 6.20) {
            // circle.classList.remove("scroll");
            section.classList.remove("minH");
            return;
        }
        console.log("inside section...")
        circle.classList.add("scroll");
        section.classList.add("minH")
        // if(scrollY > offsetTop)

        yellow.style.scale = step;

        // height/7
    } else {
        console.log("outside...")
        circle.classList.remove("scroll");
        section.classList.remove("minH");
    }
    // console.log(top, height - 100)
    // if (top < 10 && top > -(height / 2)) {
    //     console.log("inside if...")
    //     if (!circle.classList.contains("scroll") && !section.classList.contains("minH")) {
    //         // circle.classList.add("scroll");
    //         // section.classList.add("minH")
    //     }
    // } else {
    //     console.log("..inside else..")
    //     // circle.classList.remove("scrollH");
    //     // section.classList.remove("minH");
    // }

    // if (nextElement.getBoundingClientRect().top < 10) {
    //     circle.classList.remove("scroll");
    //     section.classList.remove("minH");
    // }
}


function setBounds(totalScroll, scroll, top) {
    //lowerLimit -> 1
    //upperLimit -> 7

    const steps = 8;
    const lowerLimit = 1;
    const lower = totalScroll / steps;
    const newScroll = scroll - top;

    // if(scroll )
    const val = (newScroll / lower).toFixed(2);

    if (val < lowerLimit) {
        return lowerLimit;
    } else if (val > steps) {
        return steps;
    } else {
        return val;
    }
}


// window.addEventListener("scroll", scrollObserver);

/* AuthenticatorAssertionResponse
aha */
const observeElement = (e) => {
    const offsetHeight = parentSection.offsetHeight;
    const top = parentSection.offsetTop;
    const totalScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const translateHeight = offsetHeight - windowHeight + 1;
    // scale-> 7 
    //totalScrollableHeight offsetHeight - windowHeight
    // const minScale = (offsetHeight - windowHeight) / 8;
    // const scale = (totalScroll - windowHeight) / minScale;
    // console.log(scale);
    const totalScrollInElement = top + offsetHeight - 2 * windowHeight;
    //lowerLimit -> 1
    //maxLimit -> 7
    const scale = setBounds(totalScrollInElement, totalScroll, top);


    if (totalScroll > top && totalScroll + windowHeight < top + offsetHeight) {
        // console.log("section in viewport...")
        section.setAttribute("style", "position:fixed;top:0;left:0;right:0;");
        circleContainer.removeAttribute("style");
        yellowSection.setAttribute("style", `transform:scale(${scale})`)
    } else if (totalScroll > top && totalScroll > top + offsetHeight - windowHeight) {
        //section is above from viewport 
        // console.log("section is not in viewport...")
        circleContainer.setAttribute("style", `transform:translateY(${translateHeight}px)`)
        section.removeAttribute("style");
    } else {
        section.removeAttribute("style");
        circleContainer.removeAttribute("style");
        //section in down from viewport
    }
}

window.addEventListener("scroll", observeElement);

// const section = document.querySelector(".section");
// const observer = new IntersectionObserver(entries => {
//     for (let entry of entries) {
//         if (entry.isIntersecting) {
//         //    watch()
//         } else {
//             console.log("out...")
//         }
//     }
// }, {
//     threshold: 0.5
// })


// observer.observe(section)



// const section = document.querySelector(".section");
// let timer;
// const observer = new IntersectionObserver(entries => {
//     for (let entry of entries) {
//         const element = entry.target;
//         const prevElement = element.previousElementSibling;
//         if (entry.isIntersecting) {
//             // prevElement.style.paddingBottom = "600px";
//             console.log("entry....")
//             // element.style.position = "fixed";
//             // element.style.height = "600px";
//             // element.style.width = "100%";
//             // element.style.top = 0;
//             // observer.unobserve(element)
//         } else {
//             console.log("entry not..")
//             // prevElement.removeAttribute('style');
//             // element.removeAttribute('style');
//         }
//     }
// }, {
//     threshold: 0.5
// })

// observer.observe(section);


// #2c2c2c



