//personaje de tv
let nombre = "waltuh";
let serie = "breaking good";
let edad = 50;

let personaje = {
    nombre : "waltuh",
    serie : "breaking good",
    edad : 50, 
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['serie']); //estas son dos formas...

personaje.edad = 13; //esta es mas usada
personaje['edad'] = 16; 

let llave = 'edad';
personaje[llave] = 18 //otra manera de hacerlo...

delete personaje.serie;

console.log(personaje)