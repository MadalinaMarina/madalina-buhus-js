let p = document.querySelector('.message');
let p2 = document.getElementById('my-id');
let oldWidth = window.innerWidth;

window.addEventListener('resize', (event) => {
  let newWidth = window.innerWidth;
  p.innerText = newWidth;

  if (newWidth !== oldWidth) {
    p2.innerText = 'Fereastra si-a schimbat latimea.';
  } else {
    p2.innerText = '';
  }

  oldWidth = newWidth;
});
