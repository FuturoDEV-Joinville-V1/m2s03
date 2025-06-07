/*

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