let user = {
    id:1,
    name: "Jorge",
    age:25,
};

for(let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['chancho','perro','gato'];

for(let indice in animales){
    console.log(indice, animales[indice])
}