import { modalCall, btnCall, overlay } from '../../js/elements.js';

export const initOverlay = () => {
  overlay.addEventListener('click', function() {
    this.classList.remove('active');

    modalCall.classList.remove('active');
    btnCall.forEach(btn => {
      btn.classList.remove('active');
    })
  });
}