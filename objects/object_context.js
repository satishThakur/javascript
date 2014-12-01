/**
 * Created by satish on 30/11/14.
 */
(function(){
    'use strict';

    var obj = {
        x : 4,
        y : 45,

        sum : function(){
            return this.x + this.y;
        }
    };

    console.log(obj.sum());
})();