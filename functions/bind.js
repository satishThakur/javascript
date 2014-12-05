/**
 * Created by satish on 04/12/14.
 */

(function(){

    var f = function(){
      console.log(this.x);
    };

    var g = f.bind({x : 'sssss'});

    g();




    //but ES 5 bind does currying.... yummy???
    //lets see few examples of partial function application and curring...


    function sum(x ,y ){
        return x + y;
    }

    var addTwo = sum.bind(null, 2);

    console.log('5 addTwo is', addTwo(5));


    function func(x ,y){
        return this.z + x + y;
    }
    var anotherFunc = func.bind({z : 5}, 4);
    console.log(anotherFunc(3));



    //ES 3 does not have bind... lets try to simulate it...

    var myBind = function(f, o){
        var partialArgs = arguments;

        return function(){
            var args = [];
            for(var i = 2; i < partialArgs.length; i ++){
                args.push(partialArgs[i]);
            }
            for(var j = 0; j < arguments.length; j++){
                args.push(arguments[j]);
            }
            return f.apply(o, args);
        }
    }

    var h = myBind(f, {x : 'pppp'});
    h();

    var addNine = myBind(sum, null, 9);
    console.log('add 5 to 9', addNine(5));


})();