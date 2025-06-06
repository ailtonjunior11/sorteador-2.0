const btn = document.querySelector("button"); // Pega o botão

function gererateNumber() {
  const minValue = Math.ceil(document.querySelector(".input-min").value); // Nesse caso, o Math.ceil está arredondando o valor para cima
  const maxValue = Math.floor(document.querySelector(".input-max").value); // Nesse caso, o Math.floor está arredondando o valor para baixo

  const result =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; // Aqui está o cálculo para gerar um número aleatório, lembrando que o Math.random() gera um número aleatório entre 0 e 1 e o Math.floor arredonda o valor para baixo, nesse cálculo estamos pegando o valor mínimo e máximo e fazendo o cálculo para gerar um número aleatório entre eles.

  alert(result);
} // Função com intuito de gerar um número aleatório

btn.addEventListener("click", gererateNumber); // Adiciona um evento de click ao botão
