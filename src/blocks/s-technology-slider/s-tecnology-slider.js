const { EffectCoverflow } = require("swiper");

const slider = document.querySelector('.s-technology-slider-container');

const block = document.querySelector('.swiper-wrapper');
const button = document.querySelector('.read-more');


let mySwiper;

function mobileSlider () {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
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
    
    slider.dataset.mobile = 'true';

  }
  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
    
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}
  
mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
})

/////////////////////////////////////////////////////////////////////////////////////
button.onclick = function() {
  block.classList.toggle('is-collabsed');
  button.textContent = button.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть';
};
