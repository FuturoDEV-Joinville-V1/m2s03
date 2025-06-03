/*
    Utilizando o prompt, crie um script que:

    Receba o nome de uma cidade

    Coloque no console do navegador:
      A string recebida em maiúsculo;
      A string recebida em minúsculo;
*/

const cidade = prompt("Digite o nome de uma cidade");

console.log("Cidade em maiusculo:", cidade.toUpperCase());
console.log("Cidade em minusculo:", cidade.toLowerCase());