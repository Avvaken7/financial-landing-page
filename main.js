const swiper = new Swiper(".swiper", {
    slidesPerView: 2.5, // Бічні слайди наполовину видимі
    centeredSlides: true, // Центрує активний слайд
    loop: true, // Безкінечний скролл
    spaceBetween: 32, // Відстань між слайдами
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// BurgerMenu

const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const noscroll = document.querySelector('body');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    noscroll.classList.toggle('overflow-hidden');
})

document.querySelectorAll('.mobile-nav-item').forEach(n => n.
    addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        noscroll.classList.remove('overflow-hidden');
}));
