/**
 * Created by satish on 29/11/14.
 */
(function(){

    //join pretty handy..

    var a = ['this', 'is', 'a', 'array'];

    //default is comma!!
    var printable = a.join(' ');
    console.log(printable);

    //join is quite opposite to string split
    //but for split space is the default.. not comma!!!
    var x = 'life is beautiful'.split().join(' ');
    console.log(x);


    //reverse...

    console.log(a.reverse().join(' '));

    //sort...

    console.log(a.sort());
    var numbers = [56, 43, 22, 65, 103, 543, 3, 120, 53, 96, 43, 21];
    numbers.sort();

    //what are you expecting here??
    console.log(numbers);

    var numbers = [56, 43, 22, 65, 103, 543, 3, 120, 53, 96, 43, 21];;

    numbers.sort(function(a,b){
       return a -b;
    });
    console.log(numbers);

    //concat...
    //but strange it does flatten but onl to depth one not further...
    console.log([1,2,3].concat(4,5,6,[7,8,9], [10,[11,12]]));

    //slice... does not modify the array returns the new one...

    var a = [1,2,3,4,5];
    console.log(a.slice(0,2));

    //see the syntax negative index starts from last.. there is nothing called -0 so -1 is last guy
    console.log(a.slice(0, -2));

    //not read anywhere in spec but it works!!

    console.log(a.slice(3, 400));


    //splice.... very important function

    var a = [1,2,3,4,5];
    var spliced = a.splice(2);
    console.log(a,spliced);

    var a = [1,2,3,4,5];
    var spliced = a.splice(2,2);
    console.log(a,spliced);

    var a = [1,2,3,4,5];
    var spliced = a.splice(2,2, 'deleted');
    console.log(a,spliced);


    //push pop, unshift shift, work to make array behave like stack and queue

    var a = [];

    a.push(2);
    a.unshift(1);
    console.log(a);




})();