/**
 * Created by satish on 29/11/14.
 */
(function(){
    'use strict';

    //lets say you want to remove everything from array...

    var a = [1,2,3,4,5];
    a.length = 0;
    console.log(a);

    //or just want to remove last n entries
    //ofcourse we can do same thing with pop as well..
    var removeLastN = function(a, n){
        if(n >= a.length){
            a.length = 0;
        }else{
            var newLength = a.length - n;
            a.length = newLength;
        }

        return a;

    }

    var removeLastNBetter = function(a,n){
        for(var i = 0; i < n ; i++){
            a.pop();
        }
        return a;
    }


    //lets try to make array kind of immutable not in true sense but just length..

    var a = [1,2,3,4,5];

    Object.defineProperty(a, 'length', {writable : false});
    //cant do this!!
    //a.length = 0;
    //but strange i can do this
    a.push(6);
    console.log('a after push',a);


    var a = removeLastN([1,2,3,4,5,6,7,8,9,10], 5);
    console.log(a);

    var b = removeLastNBetter([1,2,3,4,5,6,7,8,9,10], 5);
    console.log(b);

    var c = removeLastNBetter([1], 5);
    console.log(c);



})();