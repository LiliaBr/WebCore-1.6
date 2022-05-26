import {overlay, btnBurger, sidebar, btnClose, btnCloseF} from '../../js/elements.js';

export const burgerMenu = () => {
  
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
  })

  btnBurger.addEventListener('click', function(){
    overlay.classList.toggle('active');
    sidebar.classList.toggle('active');
    btnBurger.classList.toggle('active');
  });
}