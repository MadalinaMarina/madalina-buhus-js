
var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'c++',
    'node.js',
    'jquery'
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  ]
};

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.');
var message = '';
var i = 0;

for (i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    message = message + person.skills[i] + ' ';
  }
}

console.log(message.trim());

console.warn(' In mod similar, afiseaza skillurile care NU contin j.');
message = '';

for (i = 0; i < person.skills.length; i++) {
  if (person.skills[i].includes('j') === false) {
    message = message + `${person.skills[i]} `;
  }
}

console.log(message.trim());

console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');
message = '';

for (i = 0; i < person.skills.length; i++) {
  if (person.skills[i][0] !== 'j') {
    message = message + `${person.skills[i]} `;
  }
}

console.log(message.trim());

console.warn('Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."');
message = 'Prietenii mei se numesc ';

for (i = 0; i < person.friends.length; i++) {
  var friendName = person.friends[i].name;
  var friendSurname = person.friends[i].surname;
  message = message + `${friendName} ${friendSurname}`;

  if (i === person.friends.length - 1) {
    // message = message + '.'
    message += '.';
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn(' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.');
var ageTotal = 0;

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  if (friend.age >= 30) {
    // ageTotal = ageTotal + friend.age;
    ageTotal += friend.age;
  }
}

console.log(ageTotal);

console.warn('Folosind un for, afiseaza suma anilor de nastere a persoanelor.');
var yearsTotal = 0;
var currentYear = new Date(Date.now()).getFullYear();

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendBirthYear = currentYear - friend.age;

  yearsTotal += friendBirthYear;
}

console.log(yearsTotal);

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.');

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = person.age - friend.age;

  if (diff > 2) {
    console.log(diff);
  }
}

console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. ');
message = '';

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  if (friend.age % 2 === 0) {
    continue;
  }

  var diff = person.age - friend.age;
  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}

console.log(message.trim());

console.warn('Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.');
message = '';

for (i = person.skills.length - 1; i >= 0; i--) {
  message += person.skills[i] + ' ';
}

console.log(message.trim());



//-------Tema---------

// ex 6, subpunctul 9
console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana');
message = 'Skil-urile persoanei sunt: ';

for (i = 0; i < person.skills.length; i++) {
    message += person.skills[i] + ' ';
}

console.log(message);


// ex 6, subpunctul 10
// aici am complicat un pic exercitiul, doar de fun
console.warn(' In mod similar, afiseaza skillurile care incep cu c');
message = 'Skil-urile care incep cu litera c sunt: ';
var cSkills = [''];
var j = 0;

for (i = 0; i < person.skills.length; i++) {
  if(person.skills[i][0] === 'c') {
    cSkills[j] = person.skills[i];
    j++;
  }
}

if(j === 1){
  message += cSkills[0];
}  

if(j === 2) {
  message += cSkills[0] + ' si ' + cSkills[1];
}

if(j > 2) {
  for (i = 0; i < j; i++) {
    if (i !== j-1)
      message += cSkills[i] + ', ';
    else 
      message += ' si ' + cSkills[i];
  }
}

console.log(message);


// ex 6, subpunctul 11
console.warn('Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');
message = 'Numele de familie ale prietenilor mei sunt: ';

for (i = 0; i < person.friends.length; i++) {
  message += person.friends[i].surname + ' ';
}

console.log(message);


// ex 6, subpunctul 12
console.warn('Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ');
var sum = 0;

for (i = 0; i < person.friends.length; i++) {
  sum += person.friends[i].age;
}

console.log('Numarul total al varstelor este: ' + sum);


// ex 6, subpunctul 13
// Folosind un for, afiseaza suma anilor  persoanelor. 
// nu asta am facut si la ex anterior!?

// ex 6, subpunctul 14

function OneOrMore (number) {
  if (number == 1)
    return ' an.';
  else
    return ' ani.';
}

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');
var diff;

for (i = 0; i < person.friends.length; i++) {
  diff = Math.abs(person.age - person.friends[i].age);
  console.log('Diferenta de varsta dintre ' + person.name + ' si ' + person.friends[i].name + ' este de ' + diff + OneOrMore(diff));
}

// ex 6, subpunctul 15
// console.log('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". ');
// idem ex anterior, dar cu alt text


// ex 6, subpunctul 16
console.warn('Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. ');
message = 'Prietenii mei sunt: ';

for (i = person.friends.length - 2; i >= 0; i--) {
  message += person.friends[i].name + ' ' + person.friends[i].surname + ', ';
}

message += person.friends[person.friends.length-1].name + ' ' + person.friends[person.friends.length-1].surname + '.';

console.log(message);