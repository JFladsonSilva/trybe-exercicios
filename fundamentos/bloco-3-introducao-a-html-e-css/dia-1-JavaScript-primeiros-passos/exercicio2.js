// const a = 15
// const b = 7
// EXERCICIO2
// if (a > b){
//     console.log(a)
// } else{
//     console.log(b)
// }

// EXERCICIO3
//  const c = 10
// if (a > b && a > c){
//     console.log(a)
// } else if (b > a && b > c){
//     console.log(b)
// } else {
//     console.log(c)
// }

// EXERCICIO4
// const num = 15
// if (num > 0){
//     console.log("positive")
// } else if (num < 0) {
//     console.log("negative")
// } else {
//     console.log(0)
// }
//EXERCICIO5
// const aTri1 = 60;
// const aTri2 = 60;
// const aTri3 = 60;
// if (aTri1 + aTri2 + aTri3 == 180){
//     console.log(true)
// } else {
//     console.log(false)
// }
//EXERCICIO6
// let peca = 'Cavalo'.toLowerCase()
//     switch(peca){
//         case 'cavalo':
//             console.log('pode se mover para os lados');
//             break;
//         case 'rainha':
//             console.log('pode ir do inicio ao fim do tabuleiro')
//             break;
//         case 'rei':
//             console.log('pode se mover livremente')
//             break;
//         default:
//         console.log('error, peça inválida!');
//         break;
//     }
//EXERCICIO7
// let nota = 90

// if (nota >= 90 && nota < 100){
//     console.log('Nota A')
// } else if (nota >= 80 && nota < 90){
//     console.log('Nota B')
// } else if (nota >= 70 && nota < 80){
//     console.log('Nota C')
// } else if (nota >= 60 && nota < 70){
//     console.log('Nota D')
// } else if (nota >= 50 && nota < 60) {
//     console.log('Nota E')
// } else if (nota >= 40 && nota < 50){
//     console.log('Nota F')
// } else if (nota < 0 || nota > 100) {
//     console.log('Nota inválida')
// }
//EXERCICIO8
// const n1 = 4
// const n2 = 1
// const n3 = 2
// if (n1 % 2 == 1 || n2 % 2 == 1 || n2 % 2 == 1){
//     console.log(true)
// }else {
//     console.log(false)
// }
//EXERCICIO9
const custoProduto = 50;
const valorVenda = 100;
const impostoSobreOCusto = 0.2 * 100;
const valorCustoTotal = custoProduto + impostoSobreOCusto;
const lucro = valorVenda*1000 - valorCustoTotal;

if (lucro > 0){
    console.log('O lucro foi de ' + lucro);
}else if (valorVenda < 0 || valorCustoTotal < 0){
    console.log('Valores inválidos');
}