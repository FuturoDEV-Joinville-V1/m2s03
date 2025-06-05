/*
    Receba um número digitado pelo usuário que irá representar a nota de um aluno;

    Classifique a nota do aluno da seguinte forma:
        Abaixo de 6: “E”;
        Entre 6 e 6,99: “D”;
        Entre 7 e 7,99: “C”;
        Entre 8 e 8,99: “B”;
        9 ou acima: “A”;

    Coloque no console o resultado da avaliação.
*/

const nota = prompt("Digite a nota do aluno:");

if (+nota < 6) {
    console.log('Classificação da nota: E');
} else if (+nota < 7) {
    console.log('Classificação da nota: D');
} else if (+nota < 8) {
  console.log('Classificação da nota: C');
} else if (+nota < 9) {
  console.log('Classificação da nota: B');
} else {
  console.log('Classificação da nota: A');
}
