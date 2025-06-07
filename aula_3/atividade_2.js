/*
    Receba um número digitado pelo usuário;

    Calcule o fatorial deste número.
*/

const numero = prompt("Digite um número:");

let resultado = 1;

/* For crescente
for(let i = 1; i < numero; i++) {
    resultado *= i;
}
*/

// For decrescente
for (let i = numero; i > 1; i--) {
    resultado *= i;
}

console.log(`O fatorial de ${numero} é ${resultado}.`);