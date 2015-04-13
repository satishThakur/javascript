/**
 * Created by satish on 08/12/14.
 */
(function(){
    'use strict';

    Number.prototype.times = function(f, context){
        var n = this.valueOf();
        for(var i = 0; i < n; i++){
            f.call(context,i);
        }
    };

    var n = 5;
    n.times(function(i){
        console.log(i);
    });
})();