/**
 * Created by satish on 28/11/14.
 */
(function(){

    //copy all enumerable properties of p to o
    var extend = function(o,p){
        for(var prop in p){
            o[prop] = p[prop];
        }
        return o;
    };


    var extend1 = function(o,p){
        var props = Object.getOwnPropertyNames(p);
        props.forEach(function(prop){
            if(!(prop in o)){
                var propDesc = Object.getOwnPropertyDescriptor(p, prop);
                Object.defineProperty(o, prop, propDesc);
            }
        });
        return o;
    };


    //merge : only copy those properties which o does not have..

    var merge = function(o, p){
        for(var prop in p){
            if(!o.hasOwnProperty(prop)){
                o[prop] = p[prop];
            }
        }
        return o;
    };


    //restrict : remove property from o if p does not have..

    var restrict = function(o, p){
        for(var prop in o){
            if(!(prop in p)){
                delete o[prop];
            }
        }
        return o;
    };

    //subtract very self explanatory!!
    var subtract = function(o, p){
        for(var prop in o){
            if(prop in p){
                delete o[prop];
            }
        }
        return o;
    };

    //union again self explanatory

    var union = function(o,p){
        return extend(extend({}, o),p);
    };

    //intersection

    var intersection = function(o,p){
        return restrict(extend({},o),p);
    };

    //approximation of ECMAScript 5 Object.keys() which returns own enumerable properties

    var keys = function(o){
        if(typeof o !== 'object'){
            throw new TypeError('o not object');
        }

        var result = [];
        //all enumerable in o
        for(var prop in o){
            if(o.hasOwnProperty(prop)){
                result.push(prop);
            }
        }
        return result;
    }


    /**
     *
     * Extend explanation!!
     */
    var a = Object.create(null);
    var extended = extend(a, {a : 2, b : 6});
    console.log(a);
    console.log(extended);

    //this will be undefined why?
    console.log(a.toString);
    console.log(Object.prototype.propertyIsEnumerable('toString'));

    //what happens if p has getter and setters?

    var counter = {
        $c : 0,
        get x(){
         return this.$c++;
        },

        set x(value){
            this.$c = value;
        }
    };

    console.log('counter originally', counter);
    var counterEx = extend1({},counter);
    console.log('#####CounterEx#######');
    console.log('counter', counter);
    console.log('counterEx', counterEx);


    /**
     * Merge explanation
     */
    var F = function(){
    };
    F.prototype.x = 10;
    var m = merge(new F(), {x : 4});
    console.log(m , m.x);
    console.log(Object.getPrototypeOf(m).x);

    /**
     * restrict
     */

    var r = restrict({a : 3, b : 4, c: 6}, {c : 10, x : 50});
    console.log(r);

    /**
     * subtract
     */
    var s = subtract({a : 3, b : 4, c: 6}, {c : 10, x : 50});
    console.log(s);

    console.log(keys({a : 4, v : 5 , d : 45}));

})();