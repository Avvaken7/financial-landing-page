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
