/*
    Solicite uma senha para o usuário e valide se a senha é “1234”;
    Enquanto a senha for diferente deste valor, solicite a senha novamente
*/
let senha = ''
do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Senha correta! Acesso concedido.");