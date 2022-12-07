// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional]
};

// console.log(fruitSalad(specialFruit, additionalItens));



//object destruct


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const userComplete = {...user, ...jobInfos}

const { name, age, nationality, profession, squad, squadInitials } = userComplete

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

//como a basse do zoo functions é bem grande, a DESTRUTURAÇÃO ajuda a organizar os elementos que vou usar
// para exportar não é obrigatório o uso das chaves se for para um elemento como uma função por exemplo, caso tenha mais de um, é obrigatório o uso de chaves