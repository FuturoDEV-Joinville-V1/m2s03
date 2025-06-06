/*
    Receba uma letra digitada pelo usuário referente ao conceito da nota de um aluno;

    A partir desta letra, vamos colocar no console a classificação conforme abaixo:
        A -> “Excelente”;
        B -> “Muito Bom”;
        C -> “Bom”;
        D -> “Regular”;
        E -> “Reprovado”;

    Se a letra for inválida, exiba: “Conceito inválido”

*/

const conceito = prompt("Digite o conceito do aluno:");

switch (conceito) {
    case 'A':
        console.log('Excelente');
        break;
    case 'B':
        console.log('Muito bom');
        break;
    case 'C':
        console.log('Bom');
        break;
    case 'D':
        console.log('Regular');
        break;
    case 'E':
        console.log('Reprovado');
        break;
    default:
        console.error('Conceito inválido');
        break;
}