/**
 * Created by satish on 04/12/14.
 */
(function(){

    var f = function(){
        return this.x + this.y;
    }


    var a = f.call({x : 1, y : 5});
    console.log(a);
    console.log(f.call({x : 'hello', y : ' world'}));

    var g = function(a , b){
        return this.val + a + b;
    }

    console.log(g.call({val : 'hey'}, 5, 6));
    console.log(g.apply({val : 'hey'}, [5, 6]));


    //lets design a function interceptor...
    function interceptor(f){

        return function(){
            console.log('before function call...');
            var r = f.apply(this, arguments);
            console.log('after function call..');
            return r;
        }
    }

    function sum(a,b){
        return a + b;
    }

    var logSum = interceptor(sum);

    console.log(logSum(1,3));


    var a = [1,5,7,8,56,54,3,5];

    console.log(Math.max.apply(null, a));


})();