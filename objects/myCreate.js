/**
 * Created by satish on 28/11/14.
 */

(function(){

    //ECMAScript 3 does not have a create!! can we simulate it?


    var create = function(o){
        //o can be object or a function... remember function is just a special object??
        //still confused??

        if(typeof o !== 'object' && typeof o !== 'function'){
            throw new TypeError('o not an object');
        }

        var F = function(){
        };
        F.prototype = o;
        return new F();
    };

    var b = create({x : 10, y : 45});
    console.log(Object.getPrototypeOf(b));

    //practical use of such function!!!

    //lets say you have an object..

    var mysacredObject = {z : 10, d : 4};

    //function that modifies the object.... dangerous!!!!

    var danger = function(o){
        o.z = 56;
        o.d = 4;
    };

    //danger(mysacredObject);
    danger(create(mysacredObject));
    console.log(mysacredObject);
})();