myApp.filter('capitalize', () =>{
    return (inputstring, all) =>{
        var pattern;
        if(all){
            pattern = '/([^W_]+[^\s-]*) */g';
        }else{
            pattern = '/([^W_]+[^\s-]*) */';
        }

        if(inputstring){
            var temp = inputstring.replace(pattern, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            return temp;
        }else{
            return "";
        }
    };
});

myApp.filter('replace', () =>{
    return (inputstring)=>{
        if(!inputstring){
            return "";
        }else {
//            return inputstring.toLowerCase().replace('/[\s]/g','_');
            return inputstring.toLowerCase().replace(' ','_');
        }
    }
});

myApp.filter('wordCount', () => {
    return (inputstring)=>{
        if(!inputstring){
            return 0;
        }else{
            return inputstring.split('/\s/g').length;
        }        
    }
});