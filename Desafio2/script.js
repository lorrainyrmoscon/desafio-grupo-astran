//Variável para armazenar os dados digitados
const input = document.getElementById('input');
const output = document.getElementById('output');
const botaoFind = document.getElementById('botaoFind');

//Condição 
botaoFind.addEventListener('click', () => {
  const str = input.value.replace(/[^a-zA-Z]/g, '');
  let maxLetter = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] > maxLetter) {
      maxLetter = str[i];
    }
  }
  
  output.textContent = maxLetter.toLowerCase();
});







