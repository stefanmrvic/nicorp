window.addEventListener("load", (event) => {

    const hamburger = document.querySelector('.nav__hamburger');
    const lineOne = document.querySelector('.nav__hamburger--1');
    const lineTwo = document.querySelector('.nav__hamburger--2');
    const mobileMenu = document.querySelector('.nav__mobile__items');
    const mobileMenuItems = document.querySelectorAll('.nav__mobile__item');
    const nav = document.querySelector('.nav');
    const navLogo = document.querySelector('.nav__logo');
    const body = document.body;
    const distance = document.querySelector(".nav-distance");
    let navDistance = distance.getBoundingClientRect().top;


    document.addEventListener("scroll", function(e) {
        //calculates Y coordinates from nav to top of window on scroll
        navDistance = distance.getBoundingClientRect().top;
        console.log(navDistance);

        if (navDistance < 0) {
            navLogo.classList.add("nav__logo--scrolled");
            nav.classList.add("nav--scrolled");
        }
        else {
            navLogo.classList.remove("nav__logo--scrolled");
            nav.classList.remove("nav--scrolled");
        }
    });

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
});
