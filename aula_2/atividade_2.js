/*
    Receba um número digitado pelo usuário;

    Verifique se o número digitado pelo usuário é par ou ímpar;
        Se par, coloque no console: "O número é par!"
        Se ímpar: Coloque no console: "O número é ímpar!"
*/

const numero = prompt("Digite um número: ");

/*
const resultado = +numero / 2;
console.log('Resultado divisao', resultado);

const restante = ;
console.log('Restante divisao', restante);
*/

if (+numero % 2 === 0) {
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} é impar`);
}