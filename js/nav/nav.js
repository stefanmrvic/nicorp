const hamburger = document.querySelector('.nav__hamburger');
const lineOne = document.querySelector('.nav__hamburger--1');
const lineTwo = document.querySelector('.nav__hamburger--2');
const mobileMenu = document.querySelector('.nav__mobile__items');
const mobileMenuItems = document.querySelectorAll('.nav__mobile__item');
const navLogo = document.querySelector('.nav__logo');
const body = document.body;

hamburger.addEventListener('click', () => {
    if(lineOne.classList.contains('opened--1')) {
        lineOne.classList.remove('opened--1');
        lineTwo.classList.remove('opened--2');
        mobileMenu.style.opacity = '0';
        mobileMenu.style.visibility = 'hidden';
        navLogo.style.color = '#fff';
        body.style.overflow = 'auto';

        mobileMenuItems.forEach((el) => {
            el.style.animation = 'none';
        });
    }
    else {
        lineOne.classList.add('opened--1');
        lineTwo.classList.add('opened--2');
        mobileMenu.style.visibility = 'visible';
        navLogo.style.color = '#000';
        body.style.overflow = 'hidden';
        mobileMenu.style.opacity = '1';

        mobileMenuItems.forEach((el) => {
            el.style.animation = 'fadeIn .7s forwards';
        });
    }

});
