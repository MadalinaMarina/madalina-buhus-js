var globalVariable = 'Ma aflu in contextul global';

function contextTest () {
  localVariable = 'Ma aflu in contetul local';
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  console.log(noVariable);
}

console.log(globalVariable);
// console.log(localVariable);
contextTest();