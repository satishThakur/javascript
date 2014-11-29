/**
 * Created by satish on 29/11/14.
 */
(function(){

    var x = {
        a : 45,
        f : function(){

        }
    };

    var xs = JSON.stringify(x);
    console.log(typeof xs, xs);

    var xsp = JSON.parse(xs);
    console.log(typeof xsp, xsp);
})();