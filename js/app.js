
var _ = require('underscore');

var app = require('./app1');
window.addEventListener('load', function() {

  var yugiohDecks = _.template(document.getElementById('deck-template').textContent);
console.log(app);
  for (var i = 0; i < app.length; i++) {
    var decks = yugiohDecks({
      name: app[i].name,
      type: app[i].type,
      suggestions: app[i].suggestions,
    });
    console.log(decks);

    var decked = document.createElement('div');
    decked.innerHTML = decks;
    var parent = document.getElementById('results');
    parent.appendChild(decked);
    console.log(decked);
  }
});
