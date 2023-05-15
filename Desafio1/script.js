//Inserir os dados
function calcularMedia() {
  const nome = document.getElementById("nome").value;
  const nota1 = parseInt(document.getElementById("nota1").value);
  const nota2 = parseInt(document.getElementById("nota2").value);
  const nota3 = parseInt(document.getElementById("nota3").value);
  const nota4 = parseInt(document.getElementById("nota4").value);

//Recebe os dados digitados
  if (!Number.isInteger(nota1) || !Number.isInteger(nota2) || !Number.isInteger(nota3) || !Number.isInteger(nota4) ||
      nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ||
      document.getElementById("nota1").value.includes(".") || document.getElementById("nota2").value.includes(".") || 
      document.getElementById("nota3").value.includes(".") || document.getElementById("nota4").value.includes(".") ||
      document.getElementById("nota1").value.includes(",") || document.getElementById("nota2").value.includes(",") ||
      document.getElementById("nota3").value.includes(",") || document.getElementById("nota4").value.includes(",")) {
    alert("Por favor, insira apenas números inteiros positivos.");
    return;
  }

//Calculdo da média
  const media = (nota1 + nota2 + nota3 + nota4) / 4;

//Alerta o resultado da média do aluno
  alert("O aluno (a) " + nome + " tem a média " + media);
}


