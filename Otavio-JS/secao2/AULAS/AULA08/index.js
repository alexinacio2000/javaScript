const nome = 'Alex';
const sobrenome = 'Inácio';
const idade = 23;
const peso = 83;
const altura = 1.80;

let imc;
imc = peso / (altura*altura);

let anoNascimento;
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} KG, tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}
Alex Inácio nasceu em ${anoNascimento} `)


