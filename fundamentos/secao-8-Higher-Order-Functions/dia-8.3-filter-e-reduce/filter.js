const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados.filter((item) => {
  // retorne apenas os elementos que são do tipo string
  return typeof item === 'string';
});
console.log(dados.filter((item) => typeof item !== 'string'));

const listaNumeros = [10, 20, 30, 40];

const listNumber = listaNumeros.filter((numero) => numero >= 20);

console.log(listNumber);
