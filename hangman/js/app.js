let words = ['spinach', 'umbrella', 'flamingo'];
let tries = 5;
let word = words[Math.floor(Math.random() * words.length)];
let guesedLetters = [];
let gameEnded = false;
let wordGuesed = false;
let keyboard = document.querySelector('.keyboard');
let resetButton = document.querySelector('.button-reset');
let message = document.querySelector('.message');

let renderTries = () => {
  let triesElement = document.getElementById('js-tries');

  triesElement.innerText = tries;
};

let renderWord = () => {
  let wordContainerElement = document.getElementById('js-word');
  let wordLength = word.length;
  let okIterationCount = 0;
  wordContainerElement.innerHTML = '';

  word.split('').forEach((letter) => {
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-info', 'm-1');
    
    if (guesedLetters.includes(letter)) {
      okIterationCount++;
      button.innerText = letter;
    }

    wordContainerElement.appendChild(button);
  });

  if (okIterationCount === wordLength) {
    wordGuesed = true;
  } else {
    wordGuesed = false;
  }
};

let checkGameState = () => {
  let keyboardButtons = keyboard.querySelectorAll('.btn-secondary');
  if (tries === 0) {
    gameEnded = true;
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
  } else {
    gameEnded = false;
  }

  if (gameEnded && wordGuesed) {
    message.innerText = 'Felicitari!'; 
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
    return;
  }

  if (wordGuesed) {
    message.innerText = 'Felicitari!';
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
    return;
  }

  if (gameEnded) {
    message.innerText = 'Ai pierdut!'; 
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });  
    return;
  }
};

let renderFace = () => {
  let face = document.getElementById('js-face');
  let eyes = face.querySelectorAll('.eye');
  let classNames = '';

  eyes.forEach((eye) => {
    eye.classList.remove('eye--worried', 'eye--annoyed');
  })

  if (tries >= 2 && tries <= 3) {
    classNames += 'eye--annoyed';
  }
  
  if (tries === 1) {
    classNames += 'eye--worried';
  }

  if (classNames.length < 1) {
    return;
  }

  eyes.forEach((eye) => {
    eye.classList.add(classNames);
  });
};

renderTries();
renderWord();
renderFace();

keyboard.addEventListener('click', (event) => {
  if (event.target && event.target.nodeName === 'BUTTON') {
    let letter = event.target.innerText.toLowerCase();

    // common action
    guesedLetters.push(letter);
    event.target.disabled = true;

    if (word.includes(letter)) {
      event.target.classList.add('btn-success');
    } else {
      tries--;
      event.target.classList.add('btn-danger');
    }

    renderTries();
    renderWord();
    checkGameState();
    renderFace();
  }
});

  resetButton.addEventListener('click', () => {
    message.innerText = '';
    tries = 5;
    word = words[Math.floor(Math.random() * words.length)];
    guesedLetters.length = 0;
    let buttons = document.querySelectorAll('[disabled]');

    buttons.forEach((button) => {
      button.classList.remove('btn-danger');
      button.classList.remove('btn-success');
      button.disabled = false;
    });

    renderTries();
    renderWord();
  });