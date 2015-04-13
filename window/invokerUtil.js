/**
 * Created by satish on 25/12/14.
 */

(function(){
    'use strict';

    //normally you would not attach it to global object directly... this is simply to explain the point.
    window.invoke = function(f, startMills, intervalMills, endMills){
        if(!startMills){
            startMills = 0;
        }
        setTimeout(repeat,startMills);

        function repeat(){
            f();
            if(intervalMills){
                var timerId = setInterval(f,intervalMills);

                if(endMills){
                    setTimeout(function(){
                        clearInterval(timerId);
                    },endMills);
                }
            }
        }

    }


})();