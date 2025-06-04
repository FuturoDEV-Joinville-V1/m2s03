/*

*/

const frase = prompt("Digite uma frase: ");
const palavra = prompt("Digite uma palavra: ");

if (frase.includes(palavra)) {
    console.log('A palavra ' + palavra + ' está contida na frase');
} else {
    console.log(`A palavra ${palavra} não existe na frase`);
}