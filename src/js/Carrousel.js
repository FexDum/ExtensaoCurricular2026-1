const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let current = 0;

function showSlide(index) {

    slides.forEach(slide =>
        slide.classList.remove('active')
    );

    dots.forEach(dot =>
        dot.classList.remove('active')
    );

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

document.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

// troca automática a cada 5 segundos
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 10000);