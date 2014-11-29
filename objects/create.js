/**
 * Created by satish on 28/11/14.
 */
(function(){
    'use strict';

    var a = Object.create({x : 1, y : 2});

    //what would be prototype of a?
    var aProto = Object.getPrototypeOf(a);
    console.log(typeof aProto,aProto);

    //what about prototype chain?
    var aProtoProto = Object.getPrototypeOf(aProto);
    console.log(typeof aProtoProto,aProtoProto);

    //what about the next level?

    var last = Object.getPrototypeOf(aProtoProto);
    console.log(typeof last, last);


    //what if we pass null as argument to create....

    var b = Object.create(null);

    //b is a clean slate not even toString or valueOf... do we really need this??? !!!
    console.log(Object.getPrototypeOf(b));


    //can i create with a function as argument??
    //should be right? function are after all objects!!!

    var f = function(){

    };

    var c = Object.create(f);

    //now what would be really prototype of c, of course it would be f what else??
    var cp = Object.getPrototypeOf(c);
    console.log(typeof cp,cp);


    //defining property for new properties...

    var parent = {a : 3, b : 5};

    var child = Object.create(parent,
        {
            x : {
                value : 23,
                enumerable : false
            },
            y : {
                value : function(){
                    console.log('yyy');
                },
                enumerable : true

            }
        }
    );

    console.log('Printing child',child);
    console.log(Object.getOwnPropertyNames(child));




})();