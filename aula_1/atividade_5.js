/*
    Utilizando o prompt, crie um script que:
    Receba um número decimal do usuário;
    Arredonde este número digitado para o inteiro mais próximo e exiba o resultado no console do navegador;
*/

const numero = prompt('Digite um número: ');

console.log('Número inteiro mais proximo:', Math.round(+numero));