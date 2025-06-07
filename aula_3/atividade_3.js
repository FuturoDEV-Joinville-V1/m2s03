/*
    Gere um número aleatório entre 1 e 50 com Math.random();
    Usando while, peça ao usuário que tente adivinhar o número;
        Caso o usuário acerte o número, a interação deve ser finalizada
        Caso o usuário erre o palpite, será informado se o número é maior ou menor que o número correto via console
*/

const numeroSorteado = Math.floor(Math.random() * 50) + 1;
console.log("Número sorteado:", numeroSorteado);

let palpite = prompt("Digite um número entre 1 e 50:");

while (+palpite !== numeroSorteado) {
    console.log(`Palpite incorreto. O número digitado é ${palpite > numeroSorteado ? 'maior' : 'menor' } que o número sorteado.`)
    palpite = prompt("Digite um número entre 1 e 50:");
}

console.log('Parabéns, palpite correto!');