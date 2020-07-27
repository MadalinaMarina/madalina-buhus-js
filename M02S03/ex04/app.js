let image = document.getElementsByClassName('image')[0];
let image2 = document.getElementsByClassName('image-x')[0];

let messagePara = document.querySelector('.message-para');

window.onload = function () { 
  image.addEventListener('click', () => {
    alert('Imaginea cu URLul: ' + image.src + ' s-a incarcat.');
  });

  image2.addEventListener('click', () => {
    alert('Imaginea cu URLul: ' + image2.src + ' s-a incarcat.');
  });
  }

image.addEventListener('load', () => {
  messagePara.innerText = 'Imaginea s-a incarcat';
});