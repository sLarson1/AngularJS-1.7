myApp.filter('capitalize', function () {
    return function (inputstring, all) {
        var pattern;
        if (all) {
            pattern = /([^\W_]+[^\s-]*) */g;
        }
        else {
            pattern = /([^\W_]+[^\s-]*)/;
        }

        if(inputstring)
        {
            var temp = inputstring.replace(pattern, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); 
            });
            return temp;
        }
        else{
            return '';
        }
        
      
    }
});

myApp.filter('replace', function () {
    return function (inputstring) {
        if (inputstring === undefined) {
            return '';
        }
        else {
            return angular.lowercase(inputstring).replace(/[\s]/g, '_');
        }

      
    }

});

myApp.filter('wordCount', function () {
    return function (inputstring) {
        if (inputstring === undefined) {
            return 0;
        }
        else {
            return inputstring.split(/\s/g).length;
        }
      
    }

});

