// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul paragrafului',
  class: 'clase de css',
});
let $body = $('body');

$p.appendTo($body);

// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/
// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
// https://api.jquery.com/append/
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/

let $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

$body.append($p2);

setTimeout(() => {
  $p2.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul:
// “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea”
// si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap()
// https://api.jquery.com/wrap/
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la
// inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

let $passwordSpan = jQuery('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p2);

let wrappingDiv = jQuery('<div>', {
  class: 'container',
});

// $('.nimic').add($p).add($p2).wrap(wrappingDiv);
$body.append(wrappingDiv);
$p.appendTo(wrappingDiv);
$p2.appendTo(wrappingDiv);

let msg = 'Mesaje';

$(`<h2>${msg}</h2>`).prependTo(wrappingDiv);


// Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() https://api.jquery.com/after/ 

let navigationDiv = jQuery('<div>', {
  class: 'navigation',
});

$( ".container" ).after(navigationDiv);


//Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.

let navLinkAnchor = jQuery('<a>', {
  class: 'nav-link',
  text: 'Primul Link'
});

$( ".navigation" ).append(navLinkAnchor);


// Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation. 
// Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
// https://api.jquery.com/before/ 
	
$( ".nav-link" ).before($('<h2>Navigatie</h2>'));


// Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link
// https://api.jquery.com/prepend 

let superScript = jQuery('<sup>', {
  text: '1',
});

$( ".nav-link").prepend($(`<sup>1</sup>`));


//Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container 

$( ".container" ).before($('<h1>Invat jQuery</h1>'));


// Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici.” 
// Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery. 
// Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class.

/*
let jQueryDoc = jQuery('<a>', {
  text: 'aici',
  href: 'https://jquery.com/',
  target: '_blank'
});

let $p3 = $('<p>', {
  text: `Documentatia jQuery poate fi gasita ${jQueryDoc}.`,
});

*/

//nu am putut folosi rezolvarea de mai sus (am mai incercat si in alte moduri) pentru ca in loc de aici, mi se afiseaza [object Object].

let paragraphText = 'Documentatia jQuery poate fi gasita ';
let anchorAttributes = 'href="https://jquery.com/" target= "_blank"';
let anchorText = 'aici';

$(`<p>${paragraphText}<a ${anchorAttributes}>${anchorText}<a/>.<p>`).appendTo($body);