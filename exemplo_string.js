/*
console.log("Este é exemplo de retorno no console");

window.alert("Este é exemplo de retorno no navegador");

const variavel = prompt("Este é um exemplo de interação com o usuário via prompt:");
*/

/*
    Juntos vamos criar um script que:

    Receba o nome completo do usuário (nome e sobrenome);

    E coloque no console do navegador:
      O tamanho da string;
      Apenas o primeiro nome;
*/

const nomeCompleto = prompt("Digite seu nome completo:");
const nome = nomeCompleto.split(' ');

console.log('Primeiro nome:', nome[0]);
console.log('Tamanho do nome completo: ' + nomeCompleto.length);
