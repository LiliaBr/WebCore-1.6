import { modalFeedback, btnFeedback, btnCloseF, overlay, sidebar,btnBurger } from '../../js/elements.js';

export const feedback = () => {
  
  btnCloseF.addEventListener('click', function(e) {
    e.stopPropagation();
    modalFeedback.classList.remove('active');
    overlay.classList.remove('active');
  })

  btnFeedback.forEach(btn => {
    btn.addEventListener('click', function(){
    btnBurger.classList.remove('active');
    sidebar.classList.remove('active');
    });
  })

  btnFeedback.forEach(btn => {
    btn.addEventListener('click', function() {
      modalFeedback.classList.toggle('active');
      overlay.classList.add('active');
      this.classList.toggle('active');
    });
  })
}