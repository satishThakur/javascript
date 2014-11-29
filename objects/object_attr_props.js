(function(){

    'use strict';

    //lets set the writable false so kind of immutable, and see what happens when i try to change it
    var a = Object.create({},
        {
            x : {
                value : 4,
                writable : false
            }
        }
    );

    console.log(a.x);
    //TypeError: Cannot assign to read only property 'x' of #<Object>
    //a.x = 56;

})();