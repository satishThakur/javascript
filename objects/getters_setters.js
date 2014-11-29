/**
 * Created by satish on 29/11/14.
 */

(function(){

    var point  = {
        x : 1.0,
        y : 1.0,

        get r(){
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },

        set r(v){
            var oldVal = Math.sqrt(this.x * this.x + this.y * this.y);;
            var scaleFactor = v/oldVal;
            this.x = this.x * scaleFactor;
            this.y = this.y * scaleFactor;
        }
    }

    console.log('printing point x, y, r');
    console.log(point.x,point.y,point.r);

    point.r = 25;
    console.log('printing point x, y, r after setting r to 25');
    console.log(point.x,point.y,point.r);

    console.log(point);
    console.log(Object.getOwnPropertyNames(point));

    Object.getOwnPropertyNames(point).forEach(function(prop){
       console.log(prop, Object.getOwnPropertyDescriptor(point, prop));
    });

    //lets see how does this impact inheritance..

    var anotherPoint = Object.create(point);
    anotherPoint.x = 5.0;
    anotherPoint.y = 10.0;
    console.log(anotherPoint);

    anotherPoint.r = 100;
    console.log(anotherPoint);
    //pretty sensible the getter and setter write to same object. this would be same even if it has to create new.
    //Lets check that next
    console.log(point);

    var p3 = Object.create(point);
    p3.r = 400;

    console.log(Object.getOwnPropertyNames(p3));



})();
