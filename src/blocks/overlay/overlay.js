import { modalCall, btnCall, overlay, modalFeedback, btnFeedback } from '../../js/elements.js';

export const initOverlay = () => {
  overlay.addEventListener('click', function() {
    this.classList.toggle('active');


    modalFeedback.classList.remove('active');
    btnFeedback.forEach(btn => {
      btn.classList.remove('active');
    })

    modalCall.classList.remove('active');
    btnCall.forEach(btn => {
      btn.classList.remove('active');
    })
  });
}