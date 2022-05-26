
export const toggle = () => {
  
  const btn = document.querySelector('.btn-read-more');
  const text = document.querySelector('#more');
  btn.onclick = function () {

    text.classList.toggle('open');
  }
}