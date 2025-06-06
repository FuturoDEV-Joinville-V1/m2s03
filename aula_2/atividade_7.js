/*
    Receba uma letra digitada pelo usuário;

    A partir desta letra, vamos identificar se ela é uma vogal ou consoante.

    No console exiba:
        Se a letra for vogal: “A letra [letra_digitada_pelo_usuário] é uma vogal”
        Se a letra for consoante: “A letra [letra_digitada_pelo_usuário] é uma consoante”

    Caso o valor digitado pelo usuário não seja uma letra, exibir a mensagem: “O valor digitado não é uma letra!”

*/

const letra = prompt("Digite uma letra:");

if (letra.length === 1 && isNaN(letra)) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`A letra ${letra} é uma vogal`);
            break;

        default:
            console.log(`A letra ${letra} é uma consoante`);
            break;
    }
} else {
    console.error('O valor digitado não é uma letra!');
}