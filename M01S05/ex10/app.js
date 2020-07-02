function calculateSurface(L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return L ** 2;
  }
}

console.log(`Patrat de 2 pe 2: ${calculateSurface(2)}`);
console.log(`dreptunghi de 6 pe 7: ${calculateSurface(6, 7)}`);

// Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface() care sa primeasca un singur parametru si sa calculeze suprafata unui patrat.
// Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4.
// Creeaza un wrapper numit calculateRectangleSurface() pentru calculateSurface() care sa primeasca doi parametrii si sa calculeze suprafata unui dreptunghi.
// Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.

function calculateSquareSurface (L) {
  return calculateSurface(L);
}

console.log(`Patrat de 4 pe 4: ${calculateSquareSurface(4)}.`);

function calculateRectangleSurface(L, l) {
  return calculateSurface(L, l);
}

console.log(`Dreptunghi de 8 pe 9: ${calculateRectangleSurface(8, 9)}.`);
