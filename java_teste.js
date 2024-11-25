// // Crio a função para poder receber e processar os dados inseridos pelo usuário
// function dados() {

//     // A primeira Variavél vai receber o que foi escrito dentro do input
//     var recebe = document.getElementById("nome").value;
//     // A segunda variavél vai receber o lugar onde vou fazer a alteração
//     var troca = document.getElementById("titulo");

//     troca.innerHTML = "Olá," + recebe + "! Tudo bem?";
//     // A terceira parte SEM VARIAVEL, vai ser o comando que vou usar para fazer a troca do conteudo existente na variavel destino pelo conteudo da variavel recebida do usuário
// }

function soma1() {
  var nome = document.getElementById("nome1").value;
  var sobrenome = document.getElementById("sobrenome1").value;

  let soma = nome + " " + sobrenome;

  let trocar = document.getElementById("titulo");
  trocar.innerHTML = "Olá, " + soma + "! Tudo bem?";
}
