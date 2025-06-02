/*
console.log("Este é exemplo de retorno no console");

window.alert("Este é exemplo de retorno no navegador");

const variavel = prompt("Este é um exemplo de interação com o usuário via prompt:");
*/

const nomeCompleto = prompt("Digite seu nome completo:");
const nome = nomeCompleto.split(' ');

console.log('Primeiro nome:', nome[0]);
console.log('Tamanho do nome completo: ' + nomeCompleto.length);
