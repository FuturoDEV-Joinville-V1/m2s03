/*
    Juntos vamos criar um script que:
    Receba 3 notas digitadas pelo usuário;
    E coloque no console do navegador a média dessas notas apresentando o resultado com 2 casas decimais
*/

const nota1 = prompt("Digite a primeira nota: ");
const nota2 = prompt("Digite a segunda nota: ");
const nota3 = prompt("Digite a terceira nota: ");

// Tipo de conversão: parseFloat
// Tipo de conversão: parseInt
// Tipo de conversão: Number (ou + para conversão implícita)
const media = (parseFloat(nota1) + parseInt(nota2) + +nota3) / 3;

console.log('Média das notas:', media);