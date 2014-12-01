/**
 * Created by satish on 01/12/14.
 */
(function(){

    var f = function(a,b,s){
        console.log(arguments.length); // prints how many arguments were really passed

    };

    console.log(f.length); //prints arity of a function....

    f(1,2,3,4,5);
    f();

})();