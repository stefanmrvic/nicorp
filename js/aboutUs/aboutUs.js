document.addEventListener('DOMContentLoaded', () => {
    const aboutUs = document.querySelector('.about-us__1__about-text__button');
    const aboutUsModal = document.querySelector('.about-us__about');
    const closeButton = document.querySelector('.about-us__about__button');

    aboutUs.addEventListener('click', () => {
        aboutUsModal.classList.add('visible');
    });

    closeButton.addEventListener('click', () => {
        aboutUsModal.classList.remove('visible');
    });
});