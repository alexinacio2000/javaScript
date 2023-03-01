let num = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
let text = document.getElementById('texto')

numeroTitulo.innerHTML = num;
text.innerHTML = `<p>Raiz Quadrada: ${num ** 0.5}</p>`;
text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}.</p>`
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`
text.innerHTML += `<p>Arredondado para baixo: ${Math.ceil(num)}</p>`
text.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`