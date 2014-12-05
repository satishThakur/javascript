/**
 * Created by satish on 04/12/14.
 */

(function(){
    'use strict';
    var memoization = function(f){

        var cache = {};

        return function(){
            var key = arguments.length + Array.prototype.join.call(arguments,',');
            if(key in cache){
                return cache[key];
            }else{
                console.log(this);
                cache[key] = f.apply(this,arguments);
                return cache[key];
            }
        }

    }


    function factorial(n){
        if(n <= 1){
            return 1;
        }else{
            return n * factorial(n-1);
        }
    }

    var fact = memoization(factorial);

    //console.log(fact(50));
    //console.log(fact(50));
    //console.log(fact(50));
    console.log(fact(3));

})();