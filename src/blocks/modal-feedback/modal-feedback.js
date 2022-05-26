import { modalFeedback, btnFeedback, btnCloseF, overlay } from '../../js/elements.js';

export const feedback = () => {
  
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    modalFeedback.classList.remove('active');
  })
  btnCloseF.addEventListener('click', function(e) {
    e.stopPropagation();
    modalFeedback.classList.remove('active');
    overlay.classList.remove('active');
  })

  btnFeedback.forEach(btn => {
    btn.addEventListener('click', function() {
      modalFeedback.classList.toggle('active');
      overlay.classList.toggle('active');
      this.classList.toggle('active');
    });
  })
}