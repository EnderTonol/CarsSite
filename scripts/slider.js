let currentSlideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    currentSlideIndex = (currentSlideIndex + direction + slideCount) % slideCount;
    updateSlider();
}

function currentSlide(index) {
    currentSlideIndex = index;
    updateSlider();
}

function updateSlider() {
    const slides = document.querySelector('.slides');
    const offset = -currentSlideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.next').onclick = () => moveSlide(1);
    document.querySelector('.prev').onclick = () => moveSlide(-1);
    updateSlider();
});
