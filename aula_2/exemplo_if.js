/*
    Receba dois números digitados pelo usuário (variáveis ‘a’ e ‘b’);

    Compare os valores dessas variáveis e coloque no console:
        Se a é maior que b: “a é maior que b”;
        Se b é maior que a: “b é maior que a”;
        Se a e b são iguais: “a e b são iguais”;
*/

const numero_1 = prompt("Digite o primeiro número:");
const numero_2 = prompt("Digite o segundo número:");

if (+numero_1 > parseFloat(numero_2)) {
    console.log('Primeiro número ' + numero_1 + ' é maior que o segundo número ' + numero_2);
} else if (+numero_2 > +numero_1) {
    console.log(`Segundo número ${numero_2} é maior que o primeiro número ${numero_1}`);
} else {
    console.log('Os números são iguais');
}