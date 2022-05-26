import '../scss/index.scss';
import { toggle } from '../blocks/s-intro/s-intro.js';
import { burgerMenu } from '../blocks/header/header.js';
import { feedback } from '../blocks/modal-feedback/modal-feedback.js';
import { call } from '../blocks/modal-call/modal-call.js';
import { mobileSlider } from './swiper-slider.js';
import { initOverlay } from '../blocks/overlay/overlay.js'

document.addEventListener('DOMContentLoaded', () => {
  toggle();

  initOverlay();
  
  burgerMenu();

  feedback();

  call();

  mobileSlider({
    className: '.s-brands-slider-container',
  })
  
  mobileSlider({
    className: '.s-technology-slider-container',
  })

  mobileSlider({
    className: '.s-prices-slider-container',
  })
});
