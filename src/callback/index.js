function sum(num1, num2){
    console.log('Seleccionaste la suma');
    return num1 + num2;     
}

function rest(num1, num2){
    console.log('Seleccionaste la resta');
    return num1 - num2;     
}

function multi(num1, num2){
    console.log('Seleccionaste la multiplicación');
    return num1 * num2;     
}

function div(num1, num2){
    console.log('Seleccionaste la división');
    return num1 / num2;     
}

function calc(num1, num2, callback){
    return callback (num1, num2);
}

//creamos un setTimeOut con una funcion anomima
setTimeout(function(){
console.log('Hola calculadora');
}, 5000);

//creamos un setTimeOut con una funcion 
function gretting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 5000, 'Hola de nuevo');


console.log(calc(2, 2, sum));
console.log(calc(2, 2, rest));
console.log(calc(2, 2, multi));
console.log(calc(2, 2, div));

