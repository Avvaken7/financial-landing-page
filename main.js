const swiper = new Swiper(".swiper", {
    slidesPerView: 2.5, // Бічні слайди наполовину видимі
    centeredSlides: true, // Центрує активний слайд
    loop: true, // Безкінечний скролл
    spaceBetween: 32, // Відстань між слайдами
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
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

// How to find scrollbar width and addind css variable
function setScrollbarWidth() {
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

setScrollbarWidth();
window.addEventListener('resize', setScrollbarWidth);