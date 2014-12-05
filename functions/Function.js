/**
 * Created by satish on 04/12/14.
 */
(function(){

    var f = function(){

    };

    console.log(f instanceof Function);
    console.log(f instanceof Object);

    var fProto = Object.getPrototypeOf(f);
    var funcProto = Function.prototype;

    console.log(fProto === funcProto);

    console.log(Object.getOwnPropertyNames(Function.prototype));

    var objProt = Object.getPrototypeOf(fProto);
    console.log(objProt === Object.prototype);

    console.log('##############################');
    var fp = Object.getPrototypeOf(Function);
    console.log(typeof fp, fp);
    console.log(typeof Object);

})();