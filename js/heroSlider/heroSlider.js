document.addEventListener('DOMContentLoaded', () => {
  // CHANGE ONLY THIS
  const SLIDETIME = 500; //ms
  // --------------------------
  const backButton = document.querySelector('.hero-slider-back-btn');
  const forwardButton = document.querySelector('.hero-slider-next-btn');
  // Select all slides and convert node to array for easy handling
  // const allSlides = Array.from(document.querySelectorAll('.hero-slide'));
  const allSlides = [...document.querySelectorAll('.hero-slide')];
  let clickable = true;
  let active = null;
  let newActive = null;

  function initSlider() {
    // Set the CSS transition on the slides to the value we specified in SLIDETIME above
    allSlides.forEach(slide =>
      slide.setAttribute(
        'style',
        `transition: transform ${SLIDETIME}ms ease;
                     animation-duration: ${SLIDETIME}ms`,
      ),
    );
  }

  function changeSlide(forward) {
    if (clickable) {
      clickable = false;
      active = document.querySelector('.active');
      const activeSlideIndex = allSlides.indexOf(active);

      if (forward) {
        newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
        active.classList.add('slideOutLeft');
        newActive.classList.add('slideInRight', 'active');
      } else {
        newActive =
          allSlides[
            (activeSlideIndex - 1 + allSlides.length) % allSlides.length
          ];
        active.classList.add('slideOutRight');
        newActive.classList.add('slideInLeft', 'active');
      }
    }
  }
  
  allSlides.forEach(slide => {
    slide.addEventListener('transitionend', e => {
      // Check for the old active transition and if clickable is false
      // to not trigger it more than once
      if (slide === active && !clickable) {
        clickable = true;
        // Remove all CSS animation classes on old active
        active.className = 'hero-slide';
      }
    });
  });
  
  //dots
  const dot1 = document.querySelector('.dot-1');
  const dot2 = document.querySelector('.dot-2');
  const dot3 = document.querySelector('.dot-3');

  function checkActiveSlide() {
    if(allSlides[0].classList.contains('active')) {
      dot1.style.opacity = '1';
      dot2.style.opacity = '.5';
      dot3.style.opacity = '.5';
    }
    else if(allSlides[1].classList.contains('active')) {
      dot2.style.opacity = '1';
      dot1.style.opacity = '.5';
      dot3.style.opacity = '.5';
    }
    else if(allSlides[2].classList.contains('active')) {
      dot3.style.opacity = '1';
      dot1.style.opacity = '.5';
      dot2.style.opacity = '.5';
    }
  }

  function checkActiveSlideForwards() {
    if(allSlides[0].classList.contains('active')) {
      dot2.style.opacity = '1';
      dot1.style.opacity = '.5';
      dot3.style.opacity = '.5';
    }
    else if(allSlides[1].classList.contains('active')) {
      dot3.style.opacity = '1';
      dot1.style.opacity = '.5';
      dot2.style.opacity = '.5';
    }
    else if(allSlides[2].classList.contains('active')) {
      dot1.style.opacity = '1';
      dot2.style.opacity = '.5';
      dot3.style.opacity = '.5';
    }
  }

  function checkActiveSlideBackwards() {
    if(allSlides[0].classList.contains('active')) {
      dot3.style.opacity = '1';
      dot1.style.opacity = '.5';
      dot2.style.opacity = '.5';
    }
    else if(allSlides[1].classList.contains('active')) {
      dot1.style.opacity = '1';
      dot2.style.opacity = '.5';
      dot3.style.opacity = '.5';
    }
    else if(allSlides[2].classList.contains('active')) {
      dot2.style.opacity = '1';
      dot1.style.opacity = '.5';
      dot3.style.opacity = '.5';
    }
  }

  checkActiveSlide();

  //Event listeners
  forwardButton.addEventListener('click', () => {
    checkActiveSlideForwards()
    changeSlide(true);
  });
  backButton.addEventListener('click', () => {
    checkActiveSlideBackwards()
    changeSlide(false);
  });

  // Init the slider
  initSlider();
});
