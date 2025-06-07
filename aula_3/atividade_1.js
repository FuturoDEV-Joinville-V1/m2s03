/*
    Receba um número digitado pelo usuário;
    Exiba a tabuada de multiplicação deste número, de 1 a 10
*/

const numero = prompt("Digite um número:");

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${ +numero * i }`);
}
