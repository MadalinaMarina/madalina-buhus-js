class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  displaySpeed() {}

  accelerate(accSpeed) {
    if(accSpeed) {
      this.speed = this.speed + accSpeed;
    } else {
      this.speed++;
    }

    this.displaySpeed();
    return this;
  }

  //stackoverflow: 
  // function parameterTest(bool) {
  //   if (bool !== undefined) {

  decelerate(decSpeed) {
    if(decSpeed !== undefined) {
      this.speed = this.speed - decSpeed;
    } else {
      this.speed--;
    }

    this.displaySpeed();
    return this;
  }

  setSpeed (newSpeed) {
    this.speed = newSpeed;
    this.displaySpeed();
    return this;
  }

}

let audi = new Car('Audit', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

let p = document.createElement('p');
p.innerText = `Masina se deplasa cu ${audi.speed} km/h.`;

document.body.appendChild(p);


// Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. 

audi.accelerate(12).decelerate(3).decelerate(4);

// Afiseaza viteza noua in DOM.
let p2 = document.createElement('p');
p2.innerText = `Viteza s-a marit cu 12 km/h, apoi a scazut cu 3 si cu 4 km/h. In urma aceste operatiuni, viteza a ajuns la ${audi.speed} hm/h.`;

document.body.appendChild(p2);

// Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare 
// rezolvare la linia 37

// Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.

audi.setSpeed(4).accelerate();
// sau audi.setSpeed(4).accelerate(1);

// Afiseaza noua valoare in DOM.

let p3 = document.createElement('p');
p3.innerText = `S-a setat viteza la 4 km/h, apoi s-a marit cu o unitate. Noua valoare a vitezei este de ${audi.speed} hm/h.`;

document.body.appendChild(p3);


