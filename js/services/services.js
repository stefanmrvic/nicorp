document.addEventListener('DOMContentLoaded', () => {
    const service1 = document.querySelector('.services__1');
    const service2 = document.querySelector('.services__2');
    const service3 = document.querySelector('.services__3');
    const container = document.querySelector('.services__container');
    const background1 = document.querySelector('.services__1__background__img');
    const background2 = document.querySelector('.services__2__background__img');
    const background3 = document.querySelector('.services__3__background__img');

    service1.addEventListener('mouseover', () => {
        background1.style.opacity = "1";
        background2.style.opacity = "0";
        background3.style.opacity = "0";
    });

    service2.addEventListener('mouseover', () => {
        background2.style.opacity = "1";
        background1.style.opacity = "0";
        background3.style.opacity = "0";
    });

    service3.addEventListener('mouseover', () => {
        background3.style.opacity = "1";
        background1.style.opacity = "0";
        background2.style.opacity = "0";
    });
});