var o = {a:3, b: 5};

console.log(o.toString());

o.toString = function(){
	return '{a:3, b: 5}';
}

console.log(o.toString());

o.toString = function(){
	return {};
}

console.log(o.toString());