/*
    Some os números pares de 0 a 100;
    Exiba o resultado da soma no console;
*/

let somatoria = 0;

/* Verificando se o número é par utilizando o módulo (%) 2
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        somatoria += i;
    }
}
*/

// Considerando números pares com incremento de 2 em 2
for (let i = 0; i <= 100; i+=2) {
    somatoria += i;
}

console.log('A somatória dos números pares de 0 a 100 é:', somatoria);