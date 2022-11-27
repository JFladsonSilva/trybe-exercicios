const myFizzBuzz = require('./exer2')


describe('testa função ', () => {
    it('Execute a função, sendo um número divisível por 3 e 5, verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Execute myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
      })

      it('ExecutemyFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno.', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
      })
      
      it('Execute myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique o retorno.', () => {
        expect(myFizzBuzz(2)).toBe(2);
      })

      it('Execute myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique o retorno', () => {
        expect(myFizzBuzz('d')).toBe(false);
      })
    
})