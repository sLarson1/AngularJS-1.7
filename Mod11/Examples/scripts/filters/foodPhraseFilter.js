app.filter('foodPhrase', function() {
  return function(input, charactersToFind) {
    var result = [];
    var seekPhrase = new RegExp(charactersToFind, 'i');
    for (var i = 0; i < input.length; i++) {
      var item = input[i];
      // Food name contains the character sequence argument value
      if (seekPhrase.test(item.name)) {
        result.push(item);
      }
    }
    return result;
  };
});

