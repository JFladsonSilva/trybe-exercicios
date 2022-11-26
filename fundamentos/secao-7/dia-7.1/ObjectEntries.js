// O Object.entries retorna um array de arrays, no qual cada conjunto possui a chave e valor do objeto. Observe o exemplo abaixo:

const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]

  const coutries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(coutries);
  console.log(pairKeyValue);

//   Observe que o retorno da variável pairKeyValue é um array. Cada um dos elementos é um outro array com apenas dois dados: a chave do objeto e o seu valor.

// Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente:

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };