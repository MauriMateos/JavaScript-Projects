//construir una funcion la nos permita obtener un elemento por indice, le pasamos el indice
//indice validar que no sea menor a cero y que el elemento exista en el array


function getbyIdx(arr,idx){
    
if(arr.length<=idx || idx<0){
    return 'elemento no existe'
}
return arr[idx];

}

let resultado = getbyIdx([1,2,3,4,5,10,20,30],20);
console.log(resultado);