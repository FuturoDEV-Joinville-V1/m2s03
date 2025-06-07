/*

*/

/*
const numeroAleatorioSorteado = Math.random();
console.log("Número aleatório sorteado:", numeroAleatorioSorteado);

const numeroNormalizado = numeroAleatorioSorteado * 50;
console.log("Número normalizado 50:", numeroNormalizado);

//Intervalo de 1 a 50
const numeroSorteado = Math.floor(numeroNormalizado) + 1;
console.log("Número sorteado:", numeroSolicitado);

*/
const numeroSorteado = Math.floor(Math.random() * 50) + 1;
console.log("Número sorteado:", numeroSorteado);

let palpite = prompt("Digite um número entre 1 e 50:");

while (+palpite !== numeroSorteado) {
    console.log(`Palpite incorreto. O número digitado é ${palpite > numeroSorteado ? 'maior' : 'menor' } que o número sorteado.`)
    palpite = prompt("Digite um número entre 1 e 50:");
}

console.log('Parabéns, palpite correto!');