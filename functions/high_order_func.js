/**
 * Created by satish on 05/12/14.
 */
(function(){

    'use strict';

    var not = function(f){

        return function(){
            var result = f.apply(this, arguments);
            return !result;
        }

    }

    var even = function(x){
        return x % 2 === 0;
    }

    var odd = not(even);
    console.log('is 5 odd? ', odd(5));


    /**
     * compose f(g())
     */


    var compose = function(f,g){
        return function(){
            var gResult = g.apply(this, arguments);
            return f.call(this, gResult);
        }
    };

    var sum = function(x,y){
        return x + y;
    };

    var square = function(x){
        return x * x;
    };

    var sumSquare = compose(square,sum);

    console.log(sumSquare(3,2));


    /**
     * Partial application....
     */

   var array = function(a, n){
        return Array.prototype.slice.call(a, n || 0);
    };

    //console.log('array', array([1,2,3,4], 1));

    var partialLeft = function(f /*,...*/){
        var args = arguments;

        return function(){
            var accArgs = array(args,1);
            accArgs = accArgs.concat(array(arguments));
            return f.apply(this, accArgs);
        };
    };

    var partialRight = function(f /*,...*/){
        var args = arguments;

        return function(){
          var accArgs = array(arguments);
            accArgs = accArgs.concat(array(args, 1));
            return f.apply(this, accArgs);
        };
    }

    var partialFill = function(f /*,...*/){
        var args = arguments;

        return function(){
            var a = array(args, 1);


            var i = 0, j = 0;

            for(;i < a.length; i ++){
                if(a[i] === undefined){
                    a[i] = arguments[j++];
                }
            }

            return f.apply(this, a.concat(array(arguments, j)));
        }
    }

    var f = function(x,y,z){
        return x * (2 * y + z);
    }

    console.log(partialLeft(f, 2)(3,4)); //should be 2 * (2 * 3 + 4)  = 20
    console.log(partialRight(f,2)(3,4)); // 3 * (2 * 4 + 2) = 30
    console.log(partialFill(f,undefined, 2)(3,4)); //3 * (2*2 + 4) = 24





})();