export const mobileSlider = (params) => {
  const { 
    className, 
    wrapperClassName = '.swiper-wrapper', 
    showMoreClassName = '.read-more'
  } = params;
  
  const slider = document.querySelector(className);
  const block = slider.querySelector(wrapperClassName);
  const button = slider.querySelector(showMoreClassName);

  let mySwiper;

  if (!slider) { throw new Error('No element with class: ' + className); }
  if (!block) { throw new Error('No element with class: ' + wrapperClassName); }
  if (!button) { throw new Error('No element with class: ' + showMoreClassName); }

  function mySwiperInit() {
    mySwiper = new Swiper (slider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
  
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'card',
      watchOverflow: true,
    });
  }

  button.onclick = function() {
    block.classList.toggle('is-collapsed');
    button.textContent = button.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть';
  };

  window.addEventListener('resize', () => {  
    if (window.innerWidth <= 768) {
      slider.dataset.mobile = 'true';

      if (!mySwiper || mySwiper.destroyed) {
        mySwiperInit();
      }
    } else {
      slider.dataset.mobile = 'false';
      mySwiper && mySwiper.destroy();
    }
  })

  if ((!mySwiper || mySwiper.destroyed) && (window.innerWidth <= 768)) {
    mySwiperInit();
  }
}