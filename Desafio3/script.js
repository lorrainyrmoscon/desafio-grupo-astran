function formatarNome(nomeCompleto) {
  // Divide o nome completo em array
  const nomes = nomeCompleto.split(' ');

  // Seleciona o último sobrenome
  const ultimoSobrenome = nomes[nomes.length - 1];

  // Formatação dos outros nomes
  let outrosNomes = '';
  for (let i = 0; i < nomes.length - 1; i++) {
    const nome = nomes[i];
    outrosNomes += nome.charAt(0).toUpperCase() + '.';
  }

  // Retorna com o nome formatado
  return ultimoSobrenome.toUpperCase() + '. ' + outrosNomes;
}

const botaoFormatar = document.getElementById('botaoFormatar');
const inputNome = document.getElementById('inputNome');
const resultado = document.getElementById('resultado');

botaoFormatar.addEventListener('click', function() {
  const nomeCompleto = inputNome.value;
  const nomeFormatado = formatarNome(nomeCompleto);
  resultado.innerText = nomeFormatado;
});

  