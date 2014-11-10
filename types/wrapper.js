var s = 'hey there';

s.foo  = 'bar';

//why???
console.log('s.foo is', s.foo);


var s1 = new String('hey there');

s1.foo  = 'bar';

console.log('s1.foo is',s1.foo);