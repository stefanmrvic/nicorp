document.addEventListener('DOMContentLoaded', () => {

    let progressBar = document.querySelector('.side-scrollbar__bar');
    let currentNum = document.querySelector('.side-scrollbar__current');

    window.onscroll = function() {
        let section1 = document.getElementById('hero').getBoundingClientRect().top;
        let section2 = document.getElementById('about-us').getBoundingClientRect().top;
        let section3 = document.getElementById('all-services').getBoundingClientRect().top;
        let section4 = document.getElementById('projects').getBoundingClientRect().top;
        let section5 = document.getElementById('our-clients').getBoundingClientRect().top;
        let section6 = document.getElementById('footer').getBoundingClientRect().top;

        if (section1 <= 302) {
            progressBar.style.height = '35px';
            currentNum.innerHTML = '01';
        }
    
        if (section2 <= 302) {
            progressBar.style.height = '70px';
            currentNum.innerHTML = '02';
        }
    
        if (section3 <= 302) {
            progressBar.style.height = '105px';
            currentNum.innerHTML = '03';
        }
    
        if (section4 <= 302) {
            progressBar.style.height = '140px';
            currentNum.innerHTML = '04';
        }
    
        if (section5 <= 302) {
            progressBar.style.height = '175px';
            currentNum.innerHTML = '05';
        }
    
        if (section6 <= 302) {
            progressBar.style.height = '210px';
            currentNum.innerHTML = '06';
        }
    }
});