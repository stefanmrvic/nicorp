new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    scrollLock: true,
    dragVelocity: 1.7,
    responsive: [
      {
        // screens greater than >= 770px
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          scrollLock: false
        }
      },{
        // screens greater than >= 1000px
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.2,
          scrollLock: false
        }
      }
    ]
  });