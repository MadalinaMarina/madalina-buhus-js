let person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  }
};

console.warn('Afiseaza primul nume al persoanei folosind metoda getName()');
console.log(person.getName().split(' ')[0]);

console.warn('Afiseaza diferenta de varsta dintre persoana si varsta ta folosind metoda getAge().');
console.log(`Diferenta este ${Math.abs(23 - person.getAge())}`);
// Math.abs(33 - person.getAge())

console.warn('Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).');4
let currentYear = new Date().getFullYear();
let birthYear = currentYear - person.getAge();
birthYear = birthYear + '';
console.log(birthYear.substring(2, 4));
console.log(birthYear.slice(-2));

console.warn('Afiseaza propozita: “Ma numesc xxx si am yy ani!”');
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani!`);