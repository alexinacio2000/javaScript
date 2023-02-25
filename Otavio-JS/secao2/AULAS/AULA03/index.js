console.log('Texto linha 1 \n' +
'Texto linha 2');

console.log('_______________')

// Aspas String multi-linhas
console.log(`Texto linha 1
texto linha 2`)

console.log('__________________')
// Interpolação de Expressões
//Metodo antigo, comum
var a = 5;
var b = 10;

console.log('Quinze é ' + (a+b) + ' e \nnão ' + (2*a+b) + '.')

console.log('__________')
//Interpolação usando aspas

console.log(`Quinze é ${a+b} e não ${2 * a+b}`)

console.log('________________')

//Tagged template strings

//Strings Raw   
function tag(strings, ...values) {
    return strings.raw[0];
    }

    tag`string text line 1 \n string text line 2`;