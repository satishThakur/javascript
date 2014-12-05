/**
 * Created by satish on 05/12/14.
 */
(function(){

    var map = function(a, f, context){

        var mapped = [];
        for(var i = 0; i < a.length; i++){
            mapped.push(f.call(context || null, a[i]));
        }

        return mapped;
    }

    var a = [1,2,3,4,5];

    var mapped = map(a, function(x){return x * x;});
    console.log(mapped);


    function reduce(a, f,initial,context){

        if(typeof initial === 'undefined') {

            if (a.length === 0) {
                throw new Error();
            }else{
                var init = a.pop();
                return reduce(a, f, init, context);
            }
        }else{
            if(a.length === 0){
                return initial;
            }else{
                var elem = a.pop();

                return reduce(a, f, f.call(context || null, initial,elem), context);
            }
        }

    }

    var sum = reduce([1,2,3,4,5], function(a,b){
        return a + b;
    }, 0);

    console.log('sum', sum);

})();