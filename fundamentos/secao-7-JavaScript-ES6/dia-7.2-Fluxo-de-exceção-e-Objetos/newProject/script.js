function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  console.log( myRemove([1, 2, 3, 4], 5));

  module.exports = myRemove;

  // implemente seus testes aqui
 
//   describe('testa função subtract', () => {
//     test('retorna subtração de número menor', () => {
//       expect(subtract(12, 7)).toBe(5);
//     });
//     test('retorna subtração de número maior', () => {
//       expect(subtract(3, 4)).toBe(-1);
//     });
//   })