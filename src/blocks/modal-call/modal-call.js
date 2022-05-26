import { modalCall, btnCall, btnClose, overlay } from '../../js/elements.js';

export const call = () => {

  btnClose.addEventListener('click', function(e) {
    e.stopPropagation();
    modalCall.classList.remove('active');
    overlay.classList.remove('active');
  })

  btnCall.forEach(btn => {
    btn.addEventListener('click', function() {
      modalCall.classList.toggle('active');
      overlay.classList.toggle('active');
      this.classList.toggle('active');
    });
  })
}