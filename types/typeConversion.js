//http://es5.github.io/#x11.9.3

if('' == 0){
	console.log("'' is zero");
}else{
	console.log("'' is not zero");
}

if(null == undefined){
	console.log('null == undefined');
}else{
	console.log('null != undefined');
}


var s1 = 'hello there!';
var s2 = 'hello there!';

console.log('s1 == s2 :', s1 == s2);

var a1 = [1,2,3,4];
var a2 = [1,2,3,4];

console.log('a1 == a2 :', a1 == a2);

console.log('"0" == false: ', '0' == false);

//lets convert null to number..

var nullNumber = Number(null);
console.log('nullNumber is', nullNumber);

console.log('null == 0:', null == 0);

//what binary + do
var sum = 5 + '7';
console.log('typeof sum :', typeof sum, ' sum is ', sum);

//unary +

var s1 = +'7' + 5;
console.log('typeof s1 :', typeof s1, ' s1 is ', s1);


//objects!!

//object to boolean
if(new Boolean(false)){
	console.log('Magic : false is true');
}else{
	console.log('no magic, false is false');
}

//object to string

console.log({a: 1, b : 2}.toString());
console.log({a: 1, b : 2});

console.log([1,2,3,4].toString());
console.log([1,2,3,4]);

var func = function(){
	return 2 + 6;
}

console.log(func.toString());
console.log(func);

//special date 

var date = new Date();
console.log('typeof date + 1 :', typeof (date + 1));
console.log('typeof date - 1 :', typeof (date - 1));


// type conversions









