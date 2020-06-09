var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache'
  },
  {
    name: 'Larry',
    surname: 'Larryson'
  },
  {
    name: 'Steven',
    surname: 'Stevenson'
  },
  {
    name: 'Carol',
    surname: 'Carolson'
  },
  {
    name: 'Andra',
    surname: 'Andrason'
  }
];

console.warn('Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.');
var message = '';
var arrayLength = friends.length;
var i = 0;

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];
  var space = i !== arrayLength - 1 ? ', ' : '.';

  message += `${friend.surname}${space}`;
}

console.log(message);

console.warn('Afiseaza numele complet al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break.');
message = '';

for (i = 0; i < arrayLength; i++) {
  var friend  = friends[i];

  message += `${friend.name} ${friend.surname}`;

  if (friend.name === 'Steven') {
    message += '.';
    break;
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn('Folosind keywordul continue, afiseaza numele complet al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare de 13.');

for (i = 0; i < arrayLength; i++) {
  var friend = friends[i];

  if ((friend.name + friend.surname).length <= 13) {
    continue;
  }

  console.log(`${friend.name} ${friend.surname}`);
}


//------------Tema----------------

// ex 7, subpunctul 4
console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');

for (i = 0; i < arrayLength; i++) {
  console.log(friends[i].name);
}

// ex 7, subpunctul 5
console.warn('Afiseaza numele complet al tuturor prietenilor.');

for (i = 0; i < arrayLength; i++) {
  console.log(friends[i].name + ' ' + friends[i].surname);
}

// ex 7, subpunctul 6
console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');

for (i = 0; i < arrayLength; i++) {
  if(friends[i].surname.length >= 9){
    break;
  } else {
    console.log(friends[i].name + ' ' + friends[i].surname);
  }
}