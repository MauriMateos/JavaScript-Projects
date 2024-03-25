//short-circuit

//Falso
//false
//0
//''
//null
//undefined
//NaN

// todos estos son valores falsy
let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);
//aqui le asigno a username, la variable 'nombre'.
// y si no, le asigno anonimo, lo primero que de true.
//en este caso, evalua 'Anonimo' ya que nombre es falsy

///////////////

//ahora que nombre no es falsy, evalua 'JavaScript' primero.
nombre = 'JavaScript';
username = nombre || 'Anonimo';
console.log(username);
///



function fn1(){
    console.log('soy funcion 1');
    return false;
}
function fn2(){
    console.log('soy funcion 2');
    return true;
}
let x = fn1() && fn2();