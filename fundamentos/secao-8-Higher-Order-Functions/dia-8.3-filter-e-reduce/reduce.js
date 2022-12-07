const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
}, 0);

const numbers = [1, 32, 44, 2, 3];


//O reduce recebe 4 parametros, o acumulador, o valor que é o elemento do array, a função callback e o valor inicial.
const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
   // Iteração 1: valor do acc é 30 e o de curr é 1
   // Iteração 2:valor do acc é 31 e o de curr é 32
   // Iteração 3: valor do acc é 63 e o de curr é 44
   // Iteração 4: valor do acc é 107 e o de curr é 2
   // Iteração 5: valor do acc é 109 e o de curr é 3
   // Valor final de `acc`é 112 e `curr` para no 3


  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
// por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

const numbers1 = [50, 85, -30, 3, 15];

// Retorne o maior número
const reduce = numbers1.reduce((acc, curr) => {
    if(acc <= curr) {
        acc = curr
    }
    return acc
}, 0)
// solução com o operador ternário
const reduce1 = numbers1.reduce((acc, curr) => acc > curr ? acc : curr)

////////////////////////////////////////////////////////////////////////////
//faça uma função que some todos os números pares do array numbers

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaNumberOfArray = numbers2.reduce((acc, curr) => {
    if(curr % 2 === 0){
        acc+= curr
    }
    return acc
}, 0)
// solução com o operador térnario 
const somaNumberOfArray1 = numbers2.reduce((acc, curr) => curr % 2 === 0 ? acc += curr : acc, 0)

console.log(somaNumberOfArray1);

// se o reduce recebe um array vazio, o reduce retorna o valor inicial que é o quuarto parametro e é opcional