function fibonacci(number)

{
	var fibonacci_sequence = [];

    var var1 = 0;

    var var2 = 1;

    var var3;

    for(var i=2; i <= number;i++)

    {
        var3 = var1 + var2;

        var1 = var2;

        var2 = var3;
        fibonacci_sequence.push(var3);
    }
   return fibonacci_sequence.pop();
}

function lastFibonacci(){
	var control = document.getElementById('fib');
	var numero = parseInt(control.value)-1;
	if (isNaN(numero)){
		alert('No es un valor valido');
		return;
	}
	if (numero==0){
		alert('La serie fibonacci NO incluye numeros negativos');
		return;
	}
	if (numero==1) {
		$("#fib").val(numero);
		$("#fib_seq").val( parseInt($("#fib").val())-1);
		
	}
	else{
		$("#fib_seq").val(fibonacci(numero-1));
		$("#fib").val(numero);
	}
	
}

function nextFibonacci(){
	var control = document.getElementById('fib');
	var numero = parseInt(control.value);
	if (isNaN(numero)){
		alert('No es un valor valido');
		return;
	}
	if (numero<0){
		alert('La serie fibonacci NO incluye numeros negativos');
		return;
	}
	if (numero<2) {
		$("#fib").val(numero+1);
		$("#fib_seq").val( parseInt($("#fib_seq").val())+1);
		
	}
	else{
		$("#fib_seq").val(fibonacci(numero));
		$("#fib").val(numero+1);
	}
	
}

function currentFibonacci(){
	var control = document.getElementById('fib');
	var numero = parseInt(control.value);

	if (isNaN(numero) && !numero==""){
		alert('No es un valor valido');
		return;
	}
	if (numero<0){
		alert('La serie fibonacci NO incluye numeros negativos');
		return;
	}
	if (numero<2) {
		$("#fib_seq").val( parseInt($("#fib_seq").val())+1);
		
	}
	else{
		$("#fib_seq").val(fibonacci(numero-1));
	}
	
}
