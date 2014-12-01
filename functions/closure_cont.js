/**
 * Created by satish on 01/12/14.
 */
(function(){

    function constFunc(v){
        return function(){
            console.log('const-' + v);
        }
    }

    var funcs = [];

    for(var i = 0; i < 10; i++){
        funcs.push(constFunc(i));
    }

    funcs.forEach(function(f){
        f();
    });



    function constFuncs(){
       var fs = [];

        for(var i = 0; i < 10; i ++){
            fs.push(function(){
                console.log('const(' + i + ')');
            });
        };

        return fs;
    };

    function constFuncsFixed(){
        var fs = [];

        for(var i = 0; i < 10; i++){
            fs.push((function(i){
                return function() {
                    console.log('const[' + i + ']');
                }
            })(i));
        }
        return fs;
    }


    constFuncs().forEach(function(f){
        f();
    });

    constFuncsFixed().forEach(function(f){
        f();
    });




})();