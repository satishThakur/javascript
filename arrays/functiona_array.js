/**
 * Created by satish on 30/11/14.
 */
(function(){
    'use strict';

    //all these methods are only there in ECMAScript 5.. but we have libraries like underscore or lowdash
    //which provides them

    //forEach... even angular provides this

    var sum = 0;
    [1,2,3,4,5].forEach(function(elem){
        sum += elem;
    });
    console.log(sum);

    //default forEach never stops iteration... lets try to simulate some break..

    var foreach = function(a, f, t){

        try{
            a.forEach(f,t);
        }catch(e){
            if(e === foreach.break){
                return;
            }else{
                throw e;
            }
        }
    }

    foreach.break = new TypeError('break the loop');


    foreach([1,2,3,4,5,6], function(val){
       console.log(val);
        if(val == 4){
            throw foreach.break;
        }
    });


    //map...

    var s = [1,2,3,4].map(function(val){
        return val * val;
    });
    console.log(s);

    //filter...
    var f = [1,2,3,4,5,6,7,8,9,10].filter(function(num){
        return num % 2 == 0;
    });

    console.log(f);


    //some and every.. these are predicates!!

    var allPositive =  [1,2,3,4,5].every(function(num){
        return num > 0;
    });
    console.log(allPositive);

    var isFive = [5, 6, 4].some(function(num){
        return num === 5;
    });
    console.log(isFive);

})();