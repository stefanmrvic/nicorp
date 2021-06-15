document.addEventListener('DOMContentLoaded', () => {

    let progressBar = document.querySelector('.side-scrollbar__bar');
    let currentNum = document.querySelector('.side-scrollbar__current');

    window.onscroll = function() {
        let section1 = document.getElementById('hero').getBoundingClientRect().top;
        let section2 = document.getElementById('about-us').getBoundingClientRect().top;
        let section3 = document.getElementById('services').getBoundingClientRect().top;
        let section4 = document.getElementById('our-clients').getBoundingClientRect().top;
        let section5 = document.getElementById('all-services').getBoundingClientRect().top;
        let section6 = document.getElementById('projects').getBoundingClientRect().top;
        let section7 = document.getElementById('contact-us').getBoundingClientRect().top;
        let section8 = document.getElementById('footer').getBoundingClientRect().top;

        if (section1 <= 302) {
            progressBar.style.height = '26.25px';
            currentNum.innerHTML = '01';
        }
    
        if (section2 <= 302) {
            progressBar.style.height = '52.5px';
            currentNum.innerHTML = '02';
        }
    
        if (section3 <= 302) {
            progressBar.style.height = '78.75px';
            currentNum.innerHTML = '03';
        }
    
        if (section4 <= 302) {
            progressBar.style.height = '105px';
            currentNum.innerHTML = '04';
        }
    
        if (section5 <= 302) {
            progressBar.style.height = '131.25px';
            currentNum.innerHTML = '05';
        }
    
        if (section6 <= 302) {
            progressBar.style.height = '157.5px';
            currentNum.innerHTML = '06';
        }
    
        if (section7 <= 302) {
            progressBar.style.height = '183.75px';
            currentNum.innerHTML = '07';
        }
    
        if (section8 <= 402) {
            progressBar.style.height = '210px';
            currentNum.innerHTML = '08';
        }
    }
});