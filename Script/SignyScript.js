document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".BlueDot");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.classList.remove("previous");
            dots[i].classList.remove("Filled");

            if (i === index) {
                slide.classList.add("active");
                dots[i].classList.add("Filled");
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add("previous");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(nextSlide, 5000);

    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {

    const dots = document.querySelectorAll('.BlueDot2');

    dots.forEach(dot => {

        dot.addEventListener('click', function() {

            dots.forEach(d => d.classList.remove('Filled'));

            this.classList.add('Filled');
        });
    });

});

window.onscroll = function() {
    var navbar = document.getElementById("HeaderBlockMenu");
    if (document.documentElement.scrollTop > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.ListPlus li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const isExpanded = item.getAttribute('data-expanded') === 'true';
            item.setAttribute('data-expanded', !isExpanded);
        });
    });
});