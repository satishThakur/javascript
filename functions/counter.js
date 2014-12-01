/**
 * Created by satish on 01/12/14.
 */

(function(){

    var counter = function(){

        var counter = 0;

        return {
            count : function(){
                return counter++;
            },

            reset : function(){
                counter = 0;
            }
        }
    };


    var c = counter();
    var d = counter();
    console.log(c.count());
    console.log(d.count());

    console.log(c.count());
    console.log(d.count());

    c.reset();
    console.log(c.count());
    console.log(d.count());


})();