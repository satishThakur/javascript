/**
 * Created by satish on 01/12/14.
 */

(function(){

    var scope = 'global';

    checkScope.initial = 0;

    function checkScope(){
        var scope = 'local-' + checkScope.initial;

        return function(){
            console.log(scope);
        }
    };

    var f = checkScope();
    f();

    checkScope.initial = 45;
    f();

    var g = checkScope();
    g();
    f();

    //simple explanation....
    /**
     * initially f is bound by scope which is local-0, now scope is computed to local-0 and there is no
     * way to change it back..
     * When we change the initial to 45 it does not change scope at all.
     * when we invoke checkScope to get g.. a new local scope var is initialized to local-45 abd bound to g.
     * Now scope of f and g have no relation to each other.... they are 2 completely different variables.
     */


    /**
     * one more exotic example....
     */


    var uniqueInteger = (function(){
        var unique = 0;
        return function(){
            return unique++;
        };
    })();

    for(var i = 100; i > 90; i--){
        console.log(uniqueInteger());
    }

})();