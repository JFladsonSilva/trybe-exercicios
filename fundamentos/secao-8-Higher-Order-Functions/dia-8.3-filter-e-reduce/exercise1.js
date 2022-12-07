const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.
const ficcaoFantasia = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
// console.log(ficcaoFantasia);

//🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais    novo.
const book60 = books.filter((book) => book.releaseYear + 60 < 2022).sort((a, b) => b.releaseYear - a.releaseYear)
//   console.log(book60);
//🚀 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const expectedResult = ['Fundação', 'Duna'];
const booksByAuthorBirthYear = (birthYear) => books.filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name)

const result = booksByAuthorBirthYear(1920);
// console.log(result);

//🚀 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const expectedResult1 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];
const fantasyOrScienceFictionAuthors = () => {
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
        .map((book) => book.author.name).sort()
}
// console.log(fantasyOrScienceFictionAuthors());

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult2 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  const oldBooks = () => books.filter((book) => book.releaseYear + 60 < 2022).map((book) => book.name);
//   console.log(oldBooks());

//🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.
const expectedResult3 = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
  
}