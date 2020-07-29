$(document).ready(() => {
  $('#dialog').dialog({
    autoOpen: false,
    show: 300,
    hide: 300,
  });

  window.alert = (message) => {
    $('#dialog')
      .find('.dialog-text')
      .text(message)
      .end()
      .dialog('option', 'title', message)
      .dialog('open');

    // return $('#dialog').find('.input-class').val();
  };

  $('#dialog-open').on('click', () => {
    alert('Hello World');
  });

  $('#dialog-close').on('click', () => {
    $('#dialog').dialog('close');
  });
});
