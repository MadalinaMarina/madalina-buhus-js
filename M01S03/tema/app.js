function OneOrMore (number) {
  if (number == 1)
    return 'an.';
  else
    return 'de ani.';
}


function ageDifference (pet1, pet2) {
  if(pet1 >= pet2)
    return pet1 - pet2;
  else
    return pet2 - pet1;
}


function YearOfBirth (age) {
  var today = new Date(Date.now()).getFullYear();
  return today - age;
}


/* 
 1.Creeaza un obiect numit person 
 2.Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode. 
 3.Proprietatea pets sa contina un array de obiecte cu trei pozitii. 
 4.Obiectele din pets sa contina urmatoarele proprietati: name, species, age. 
 5.Toata informatia poate fi inventata. Nu divulga informatii personale inutil.
*/

var person = {
  firstName: 'Jessica',
  lastName: 'Alba',
  email: 'jessica.alba@gmail.com',
  birthYear: 1981,
  pets: [
    {
      name: 'Ares',
      species: 'caine',
      age: 1
    },

    {
      name: 'Tom',
      species: 'pisica',
      age: 3
    },

    {
      name: 'Frankenstein',
      species: 'hamster',
      age: 2
    }
  ],
  zipCode: 12345
}


// ex 6
console.warn('Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets. ');
console.log(
  'Numele meu este: ' + person.firstName + ' ' + person.lastName +
  ' si am ' + person.pets.length + ' animale.'
);


// ex 7
console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.');
console.log('Am acelasi email din copilarie: ' + person.email);


// ex 8
console.warn('Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”' );
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani`
);


// ex 9
console.warn('Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.');
console.log(
 'Animalul de pe pozitia 2 s-a nascut in anul ' + YearOfBirth(person.pets[2].age) + '.'
);



// ex 11
// am facut ex 11 inainte de ex 10 ca sa pot folosi variabila
console.warn('Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.');
var petName = person.pets[0].name;
console.log('Done.');


// ex 10
console.warn('Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent. ');
var difference = YearOfBirth(person.pets[0].age) - person.birthYear;
var diff = OneOrMore(difference);
console.log(`Diferenta de varsta dintre ${person.firstName} si ${petName} este de ${difference} ${diff}`);


// ex 12
console.warn('Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.');
console.log( `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ${diff}`);


// ex 16
console.warn(
  'Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)'
);

var firstProp = `${person.firstName}, ${person.pets[0]['name']}, 
  ${person.pets[1]['name']} si ${person.pets[2]['name']} locuiesc toti in aceeasi casa.`;

document.getElementById('prop01').innerHTML = firstProp;
console.log(firstProp);


// ex 17
console.warn('Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 ');

var ageDiff = ageDifference(person.pets[0].age, person.pets[2].age);
var secondProp = 'Diferenta de varsta dintre '+ person.pets[0].species + ' si ' + person.pets[2].species + ' este de ' + ageDiff + ' ' + OneOrMore(ageDiff);

document.getElementById('prop02').innerHTML = secondProp;
console.log(secondProp);


// ex 18
console.warn('Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”');

var thirdProp = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} 
  si codul meu postal este: ${person.zipCode}.`;

document.getElementById('prop03').innerHTML = thirdProp;
console.log(thirdProp);


// ex 19
console.warn('Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.');

var fourthProp = 'Animalele mele s-au nascut in ' + YearOfBirth(person.pets[0].age) +
  ', ' + YearOfBirth(person.pets[1].age) + ', respectiv ' + 
  YearOfBirth(person.pets[2].age) + ".";

document.getElementById('prop04').innerHTML = fourthProp;
console.log(fourthProp);


// ex suplimentar pentru al 5-lea id, deoarece nu exista in tema propozitie pentru el
// Vom afisa numele persoanei si ale animalelor in ordinea crescatoare a lungimilor.

var array = [person.pets[0].name, person.pets[1].name, person.pets[2].name, person.firstName];

for(var i=0; i<array.length-1; i++) {
  for (var j=i+1; j<array.length; j++) {
    if(array[j].length < array[i].length) {
      var aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }
  }
}

var display = 'Ordinea crescatoare in functie de numarul de caractere ale numelor este: ';
for(var i=0; i<array.length; i++) {
  display = display + array[i] + '  ';
}

document.getElementById('prop05').innerHTML = display;

console.log(display);

