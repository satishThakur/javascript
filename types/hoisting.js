
var scope = 'gloabal';

function f(){
	console.log(scope);

	var scope  = 'local';
	console.log(scope);
}

f();