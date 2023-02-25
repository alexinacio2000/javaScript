/* var x = '';
x = 10;

console.log(typeof(x)) */

var Valor;
function facaIsto (){
    Valor++;
    return console.log('Valor')
}

function facaAquilo(){
    return console.log('Sua variável já tem valor')
}

if (Valor === undefined){
    facaIsto();
}else {
    facaAquilo();
}