/**
 * Created by satish on 27/11/14.
 */

(function(){

    var f = function(){

    };

    f.prototype.const = 10;

    f.prototype.sayHello = function(){
      console.log('Hello');
    };

    console.log('own props of f');
    console.log(Object.getOwnPropertyNames(f));

    console.log('own props of f.prototype');
    console.log(Object.getOwnPropertyNames(f.prototype));

    console.log('own props of f.prototypes prototype');
    console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(f.prototype)));

    console.log(Object.getPrototypeOf(f.prototype) === Object.prototype);



})();