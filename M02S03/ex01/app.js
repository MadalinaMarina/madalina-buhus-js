class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  displaySpeed() {}

  accelerate() {
    this.speed++;

    this.displaySpeed();

    return this;
  }

  decelerate() {
    this.speed--;

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
