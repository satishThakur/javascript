/**
 * Created by satish on 29/11/14.
 */

(function(){
    'use strict';

    var a = [];
    a[-23] = 9;

    a[0] = 3;
    a["hello"] = "world";

    a['2'] = 'two';

    console.log(Object.getOwnPropertyNames(a), a.length);

})();