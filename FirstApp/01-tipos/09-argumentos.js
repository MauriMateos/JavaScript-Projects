function suma(num1, num2){
    console.log(arguments); //forma no recomendada
    
    return num1 + num2;
}


let resultado = suma(5, 6);
console.log(resultado);
console.log(typeof suma);