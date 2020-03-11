app.filter('finde', function () {
    return function (input) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            var item = input[i];
            // Food name contains the letter "e" or "E"
            if (/e/i.test(item.name)) {
                result.push(item);
            }
        }
        return result;
    };
});
