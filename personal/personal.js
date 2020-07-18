// Afiseaza datele persoanei din formular in DOM. 
// In fieldsetul Detalii adauga un input de abilitati numit skills si un buton de + in dreptul sau. La fiecare apasare a butonului, daca in input exista text, afiseaza abilitatea noua intr-o lista neordonata.
// In dreptul fiecarui element din lista adauga un buton de stergere. In momentul in care se apasa sterge elementul.
// https://api.jquery.com/remove/ 

$(document).ready(() => {
  let $form = $('#personForm');
  let $personDetails = $('.person-details');

  let textCaptureForm = () => {
    let $formFragment = $('<div>');

    return $formFragment
                .append('<label for="skill-rename">Edit</label>')
                .append($('<input>', {
                  type: 'text',
                  name: 'skill-rename',
                })
              )
                .append(`
                  <button type="button" class="skill-edit-save">Salvare</button>
                  <button type="button" class="skill-edit-cancel">Anulare</button>
                  `);
  };

  $form.on('submit', (event) => {
    let $formFields = $(event.currentTarget).serializeArray();
    let $personFragment = $('<div>');

    $personDetails.empty();

    // $formFields.forEach((field) => {
    //   $personFragment.append($('<p>', {
    //     text: `${field.name[0].toUpperCase()}${field.name.slice(1)}: ${field.value}`,
    //   }));
    // });

    $formFields.forEach((field) => {
      let $labelElement = $(`input[name="${field.name}"]`).prev();
      let displayName = $labelElement.text();
      $personFragment.append($('<p>', {
        text: `${displayName} ${field.value}`,
      }));
    });

    $personFragment.appendTo($personDetails);
    // $personDetails.empty().append($personFragment);
    
    event.currentTarget.reset();
    event.preventDefault();
  });

  // In fieldsetul Detalii adauga un input de abilitati numit skills si un buton de + in dreptul sau. La fiecare apasare a butonului, daca in input exista text, afiseaza abilitatea noua intr-o lista neordonata.
  // In dreptul fiecarui element din lista adauga un buton de stergere. In momentul in care se apasa sterge elementul.
  //   In dreptul fiecarei abilitati din lista neordonata adauga si un buton de editare. In momentul in care este apasat, inlocuieste textul cu un input si butoane de salvare si anulare. La salvare, schimba textul abilitatii existente.
  // Adauga un checkbox “Are animale de casa” nebifat. In momentul in care acesta este apasat, afiseaza un nou fieldset cu campurile Rasa, Nume si Varsta si un buton de Salvare. Cand butonul este apasat, afiseaza in a treia lista neordonata datele fiecarui animal si goleste acele campuri.
  // Cand checkboxul este debifat, elimina fieldsetul.

  let $seeSkill = $('#seeSkill');
  $seeSkill.on('click', (event) => {
    let $skillSection = $(event.currentTarget).next('fieldset');
    let $seeSkillText = $seeSkill.text() == 'Afiseaza Detalii' ? 'Ascunde Detalii' : 'Afiseaza Detalii';
    $skillSection.fadeToggle();
    $seeSkill.text($seeSkillText);
  })

  $('#addSkill').on('click', (event) => {
    // let skillName = $(event.currentTarget).prev().val();
    let $skillInput = $(event.currentTarget).prev();
    let skillName = $skillInput.val();

    if (skillName.length < 1) {
      return;
    }

    let ulClass = 'skills-ul';
    let $skillsUl = $(`.${ulClass}`);
    let $skillsList = $('.person-skills');

    if ($skillsUl.length < 1) {
      $skillsList.append(`<input type="checkbox" name="has-skills" id="has-skills" checked>
      <label for="has-skills">Ascunde lista</label>`)

      let $skillsCheck = $('#has-skills');
      let $skillsCheckText = $skillsCheck.next('label');

      $skillsCheck.on('click', (event) => {
        let $checkBox = $(event.currentTarget);
        let isChecked = $checkBox.is(':checked');
        
        if (isChecked) {
          $skillsUl.show();
          $skillsCheckText.text('Ascunde lista');
        } else {
          $skillsUl.hide();
          $skillsCheckText.text('Arata lista');
        }
      });

      $skillsUl = $('<ul>', {
        class: ulClass,
      }).appendTo($skillsList)
        .on('click', '.skill-delete, .skill-edit-cancel', (event) => {
        // if (event.target && event.target.nodeName === 'BUTTON' )
        $(event.currentTarget).parent().remove();
        })
        .on('click', '.skill-edit', (event) => {
          $(event.currentTarget).parent().prepend(textCaptureForm());
        })
        .on('click', '.skill-edit-save', (event) => {
          let $skillEditSave = $(event.currentTarget);
          let newSkillName = $skillEditSave.prev().val();

          if (newSkillName.length < 1) {
            return;
          }

          $skillEditSave.parents('li').find('span').text(newSkillName);
          $skillEditSave.parent().remove();
        });

    }


    $skillsUl.append(`<li>
                      <span>${skillName}</span>
                      <button class="skill-delete">Sterge</button>
                      <button class="skill-edit">Editeaza</button>
                      </li>`);

    $skillInput.val('');
  });

  $('#has-pets').on('change', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $petForm = $checkBox.siblings('.pet-form');

    if (isChecked) {
      $petForm.show();
    } else {
      $petForm.hide();
    }
  });

  $('#addPet').on('click', (event) => {
    let $addPetButton = $(event.currentTarget);
    let $petForm = $addPetButton.parent();

    let $fields = $petForm.children('input[name]');
    let formFields = [];
    $fields.each((index, domElement) => {
      let $field = $(domElement);
    
      formFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });
    if (formFields[0].value === '' || formFields[1].value === '' || formFields[2].value === '') {
      return
    }
    
    let $petList = $('.person-pets');
    let ulClass = 'pet-ul';
    let $petsUl = $(`.${ulClass}`);

    if ($petsUl.length < 1) {
    $petList.append(`<input type="checkbox" name="has-pets-list" id="has-pets-list" checked>
    <label for="has-pets-list">Ascunde lista</label>`);

    let $petsUl = $('<ul>', {
      class: ulClass,
    }).appendTo($petList);

    let $petsLi = $('<li>', {
      class: 'pet-li',
      text: `${formFields[1].value} este ${formFields[0].value} si are ${formFields[2].value} ani. `,
    }).appendTo($petsUl)
      .append(`<button class="pet-delete">Sterge</button>`)
      .on('click', '.pet-delete', (event) => {
        $(event.currentTarget).parent().remove();
      });

      let $petsCheck = $('#has-pets-list');
      let $petsCheckText = $petsCheck.next('label');
  
      $petsCheck.on('click', (event) => {
        let $checkBox = $(event.currentTarget);
        let isChecked = $checkBox.is(':checked');
        
        if (isChecked) {
          $petsUl.show();
          $petsCheckText.text('Ascunde lista');
        } else {
          $petsUl.hide();
          $petsCheckText.text('Afiseaza lista');
        }
      });
  } else {
    let $petsLi = $('<li>', {
      class: 'pet-li',
      text: `${formFields[1].value} este ${formFields[0].value} si are ${formFields[2].value} ani. `,
    }).appendTo($petsUl)
      .append(`<button class="pet-delete">Sterge</button>`)
      .on('click', '.pet-delete', (event) => {
        $(event.currentTarget).parent().remove();
      });
    }
    $('.pet-form').find('input[name]').val('');
  });

  $('#addFriend').on('click', (event) => {
    let $addFriendButton = $(event.currentTarget);
    let $friendForm = $addFriendButton.parent();

    let $fields = $friendForm.children('input[name]');
    let formFields = [];
    $fields.each((index, domElement) => {
      let $field = $(domElement);
    
      formFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });
    if (formFields[0].value === '' || formFields[1].value === '' || formFields[2].value === '') {
      return
    }

    let $friendList = $('.person-friends');
    let ulClass = 'friend-ul';
    let $friendsUl = $(`.${ulClass}`);

    if ($friendsUl.length < 1) {
      $friendList.append(`<input type="checkbox" name="has-friends-list" id="has-friends-list" checked>
      <label for="has-friends-list">Ascunde lista prietenilor</label>`);
  
      let $friendsUl = $('<ul>', {
        class: ulClass,
      }).appendTo($friendList);

      let $friendLi = $('<li>', {
        class: 'friend-li',
        text: `Prietenul meu  este ${formFields[0].value} ${formFields[1].value} si are ${formFields[2].value} ani. `,
      }).appendTo($friendsUl)
        .append(`<button class="friend-delete">Sterge</button>`)
        .on('click', '.friend-delete', (event) => {
          $(event.currentTarget).parent().remove();
        });

      let $friendsCheck = $('#has-friends-list');
      let $friendsCheckText = $friendsCheck.next('label');
  
      $friendsCheck.on('click', (event) => {
        let $checkBox = $(event.currentTarget);
        let isChecked = $checkBox.is(':checked');
        
        if (isChecked) {
          $friendsUl.show();
          $friendsCheckText.text('Ascunde lista prietenilor');
        } else {
          $friendsUl.hide();
          $friendsCheckText.text('Afiseaza lista prietenilor');
        }
      });
    } else {
      let $friendLi = $('<li>', {
        class: 'friend-li',
        text: `Prietenul meu  este ${formFields[0].value} ${formFields[1].value} si are ${formFields[2].value} ani. `,
      }).appendTo($friendsUl)
        .append(`<button class="friend-delete">Sterge</button>`)
        .on('click', '.friend-delete', (event) => {
          $(event.currentTarget).parent().remove();
        });
    }

    $('.friend-form').find('input[name]').val('');
  });

});