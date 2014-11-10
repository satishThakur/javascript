console.log(typeof undefined);

if(undefined){
	console.log('undefined is true');
}else{
	console.log('undefined is false');
}

if(undefined == false){
	console.log('undefine is really false');
}else{
	console.log('undefined doesnt seem to be false!!');
}

if(isNaN(undefined)){
	console.log('undefined is nan');
}else{
	console.log('undefine dis not nan');
}