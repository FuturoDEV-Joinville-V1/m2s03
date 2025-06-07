/*
    Realizará a soma dos números a partir de 1 até a soma igualar ou ultrapassar 100;
    Exiba no console o número em que essa soma foi atingida e o valor da soma;
*/

let somatoria = 0;
let contador = 1

while (somatoria < 100) {
    somatoria += contador;
    //console.log('contador', contador);
    //console.log('somatoria', somatoria);
    contador++;
}

console.log(`A somatória é ${somatoria} e o último número somado foi ${contador}.`);