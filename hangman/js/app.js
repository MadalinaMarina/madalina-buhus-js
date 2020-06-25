let words = ['spinach'];
let tries = 5;
let word = words[0];
let guesedLetters = [];
let gameEnded = false;
let wordGuesed = false;
let keyboard = document.querySelector('.keyboard');

let renderTries = () => {
  let triesElement = document.getElementById('js-tries');

  triesElement.innerText = tries;
};

let renderWord = (guesedLetter) => {
  let wordContainerElement = document.getElementById('js-word');
  let wordLength = word.length;
  let okIterationCount = 0;
  wordContainerElement.innerHTML = '';

  word.split('').forEach((letter) => {
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-lg', 'btn-secondary', 'm-1');

    if (guesedLetters.includes(letter)) {
      okIterationCount++;
      button.innerText = letter;
    }

    wordContainerElement.appendChild(button);
  });

  if(okIterationCount === wordLength) {
    wordGuesed = true;
  }
};

let checkGameState = () => {
  if (tries === 0) {
    gameEnded = true;
  }

  if (gameEnded && wordGuesed) {
    alert('Ai castigat');
    return;
  }

  if (wordGuesed) {
    alert('Ai castigat');
    return;
  }

  if(gameEnded) {
    alert('Ai pierdut');
    return;
  }
};

let renderFace = () => {
  let face = document.getElementById('js-face');
  let eyes = face.querySelectorAll('.eye');
  let classNames = '';

  eyes.forEach((eye) => {
    eye.classList.remove('eye--worried', 'eye--annoyed');
  });

  if (tries === 2 || tries === 3) {
    classNames += 'eye--annoyed';
  }

  if (tries === 1) {
    classNames += 'eye--worried';
  }

  if(classNames.length < 1) {
    return;
  }

  eyes.forEach((eye) => {
    eye.classList.add(classNames);
  });

  console.log(eyes);
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