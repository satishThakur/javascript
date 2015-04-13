//null is actually a keyword and not global variable!!
console.log(typeof null);

if(null){
	console.log('null is true');
}else{
	console.log('null is false');
}


if(null == false){
	console.log('null is false');
}else{
	console.log('null is not false');
}

if(null == 0){
	console.log('magic!!! null is 0');
}else{
	console.log('well there is no magic only tricks !!');
}

if(isNaN(null)){
	console.log('null is nan');
}else{
	console.log('null is not nan');
}


