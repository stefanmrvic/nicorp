window.addEventListener("load", (event) => {

    const services = document.querySelector(".services");
    const service1 = document.querySelector(".services__text__service--1");
    const service2 = document.querySelector(".services__text__service--2");
    const service3 = document.querySelector(".services__text__service--3");

    document.addEventListener("scroll", function(e) {
        //calculates Y coordinates from Service Section to top of window on scroll
        let servicesDistanceTop = services.getBoundingClientRect().top;
        //calculates Y coordinates from Services Section to bottom of window on scroll
        let servicesDistanceBottom = services.getBoundingClientRect().bottom;

        if (servicesDistanceTop < 490) {
            service1.style.animation = 'fadeInLeftServices 1s forwards';
            service2.style.animation = 'fadeInLeftServices 1s forwards .2s';
            service3.style.animation = 'fadeInLeftServices 1s forwards .4s';
        }
    });
});