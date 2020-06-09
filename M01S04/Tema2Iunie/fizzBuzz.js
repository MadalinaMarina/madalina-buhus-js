// Fizz Buzz Game
// % 3 = 0 - Fizz
// % 5 = 0 - Buzz

var i;
var fizz = 'Fizz';
var buzz = 'Buzz';

for (i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) 
    console.log(fizz + ' ' + buzz);
  else 
    if (i % 3 === 0)
      console.log(buzz);
    else
      if (i % 5 === 0)
        console.log(fizz);
      else 
        console.log(i);
}
