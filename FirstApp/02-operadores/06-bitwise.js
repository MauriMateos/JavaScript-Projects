//bit: 0 1
//byte: 8 bits
//byte: 00000000 -> 0
//byte: 00000001 -> 1
//byte: 00000010 -> 2 
//byte: 00000011 -> 3 
//byte: 00000100 -> 4 
//byte: 00000101 -> 5 
//byte: 00000110 -> 6 
//byte: 00000111 -> 7 

//la operacion bitwise utiliza la base binaria de los numeros
//para poder operar


//en | cualquiera de los bits puede ser 1
console.log(1 | 3); //00000101
console.log(2 | 4); //00000110
console.log(4 | 5); //00000101
console.log(5 | 6); //00000111

//en & ambos bits tienen que ser 1
console.log(1 & 3); //00000001
console.log(1 & 4); //00000000
console.log(3 & 5); //00000001
