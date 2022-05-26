import { modalCall, btnCall, btnClose, overlay, sidebar, btnBurger } from '../../js/elements.js';

export const call = () => {

  btnClose.addEventListener('click', function(e) {
    e.stopPropagation();
    modalCall.classList.remove('active');
    overlay.classList.remove('active');
  })

  btnCall.forEach(btn => {
    btn.addEventListener('click', function(){
    btnBurger.classList.remove('active');
    sidebar.classList.remove('active');
    });
  })

  btnCall.forEach(btn => {
    btn.addEventListener('click', function() {
      modalCall.classList.toggle('active');
      overlay.classList.add('active');
      this.classList.toggle('active');
    });
  })
}