/*
  Receba o email do usuário;
  Extraia e exiba o nome do usuário do email (todo o valor antes do @) no console do navegador
*/

const email = prompt("Digite seu e-mail: ");

console.log('Usuário do email:', email.split('@')[0]);