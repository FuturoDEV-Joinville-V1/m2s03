/*
    Receba um número do usuário;

    Coloque no console do navegador:
        A raiz quadrada desse número;
        O quadrado desse número;
        Este número dividido por 3 contendo 3 casas decimais;
*/

const numero = prompt("Digite um número:");

console.log("Raiz quadrada:", Math.sqrt(numero));

console.log("Quadrado do número:", Math.pow(numero, 2));

console.log("Divisão por 3:", (numero / 3).toFixed(6));
