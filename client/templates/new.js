Template.new.events = {
  'click input#checkbox-random': function() {
    if ($("#checkbox-random").prop('checked')) {
      $("img.sigil").attr('src', '/img/sigils/targaryen.png');
    } else {
      $("img.sigil").each(function(index, image) {
        $(image).attr('src', $(image).attr('data-image'));
      });
    }
  }
}

Template.new.rendered = function() {
  $('.player').typeahead({
    name: 'players',
    template: Template.playerTypeahead,
    local: [
      {
        value: 'peter.m.brandt@gmail.com',
        tokens: ['peter', 'brandt', 'peter.m.brandt@gmail.com'],
        name: 'Peter Brandt',
        profileImageUrl: 'https://lh4.googleusercontent.com/-rS_dG4mSkxA/AAAAAAAAAAI/AAAAAAAAAMA/G8RRfrP93L4/photo.jpg'
      }
    ],
    engine: Handlebars
  });
};