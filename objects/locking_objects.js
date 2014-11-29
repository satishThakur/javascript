/**
 * Created by satish on 29/11/14.
 */
(function(){
    'use strict';

    //lets make an object non extensible!!

    var a = {z : 45};
    Object.preventExtensions(a);
    // throws TypeError: Can't add property x, object is not extensible
    //note that only on strict mode otherwise just ignores happily..
    //a.x = 3;

    //but i can still change a's z

    a.z = 34;
    console.log(a.z);

    //sure we can make a property as non writable but there are better methods!!!

    //seal is more of less same as above just makes configurable also false

    //freeze makes property read only as well

    Object.freeze(a);
    //TypeError: Cannot assign to read only property 'z' of #<Object>
    //a.z = 12;


})();