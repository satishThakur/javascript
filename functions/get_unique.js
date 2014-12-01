/**
 * Created by satish on 01/12/14.
 */

(function(){

    uniqueInteger.initial = 0;

    function uniqueInteger(){
      return uniqueInteger.initial++;
    };

    for(var i = 0; i < 10; i++) {
        console.log(uniqueInteger());
    }
})();