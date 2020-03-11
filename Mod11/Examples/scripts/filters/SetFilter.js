app.filter('set', function() {

  return function(input) {
    var result = [];
    var boolAlreadyPushed = false;
    for (var i = 0; i < input.length; i++) {
      boolAlreadyPushed = false;
      var item = input[i];
      for (var j = 0; j < result.length; j++) {
        if (input[i].name == result[j].name) {
          boolAlreadyPushed = true;
          break;
        }
      }
      if (!boolAlreadyPushed) {
        result.push(item);
      }
    }
    return result;
  };
});
