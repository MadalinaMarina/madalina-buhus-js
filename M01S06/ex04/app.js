(() => {
  let showMessage = (message) => {
    let messageParagraph = document.createElement('p');

    messageParagraph.innerText = message;
    messageParagraph.classList.add('message');

    document.body.appendChild(messageParagraph);

    setTimeout(() => {
      messageParagraph.remove();
    }, 200);
  };

  document.addEventListener('DOMContentLoaded', () => {
      let stage = document.querySelector('.stage');

      stage.addEventListener('mouseover', () => {
      console.log('Mouseul este pe scena.');
      showMessage('Mouseul este pe scena.');
      });

      stage.addEventListener('mouseout', () => {
        console.log('Mouseul nu este pe scena');
        showMessage('Mouseul nu este pe scena.');
        });
  });
})();