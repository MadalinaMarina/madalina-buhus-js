// Adauga folosind jQuery un paragraf cu clasa msg si textul “Acesta este un mesaj de eroare”.
// Dupa ce acesta a fost adaugat, adauga-i clasa error.
// Salveaza intr-o variabila un element de tip sup cu textul 1 si adauga-l la inceputul paragrafului.

$('<p>', {
  class: 'msg',
  text: 'Acesta este un mesaj de eroare!',
})
  .appendTo($('body'))
  .addClass('error')
  .prepend();

let errorNumber = 1;
let supElement = $(`<sup>${errorNumber}</sup>`).prependTo('.error');

// $('<p class="err">Documentatia jQuery se afla <span>aici</span>.</p>').appendTo(
//   $('body'),
// );

// $('p span')
//   .empty()
//   .replaceWith(
//     $('<a>', {
//       href: '//google.com',
//       text: 'aici',
//     }),
//   );
