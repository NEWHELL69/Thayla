(function () {
    let frameNumber = 1;
    
    const carouselToggle = document.querySelector("#carousel-toggle");
    const carouselsInner = document.querySelectorAll(".carousel .carousel-inner");

    carouselToggle.addEventListener("click", (e) => {
        carouselsInner.forEach((carousel) => {
            carousel.classList.remove(`carousel-inner-${frameNumber}`)
        })

        frameNumber = (frameNumber%carouselsInner.length) + 1;

        carouselsInner.forEach((carousel) => {
            carousel.classList.add(`carousel-inner-${frameNumber}`)
        })
    });
})() 