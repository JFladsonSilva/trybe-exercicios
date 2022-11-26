const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
    }
  };
  
  const sum = (value1, value2) => {
    // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
    try { 
      verifyIsNumber(value1, value2);
      return value1 + value2;
    // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '1'));

  //para lançar uma exeção de erro em uma função por exeplo, poderia ser usado apenas um return retornando uma mensagem de erro. Mas temos uma alternativa mais correta para isso que é o    throw new Error()   . Isso que é tratar um erro.

 // A palavra reservada throw serve para lançar uma exceção. No caso, definimos que essa exceção deveria acontecer caso algum parâmetro não fosse do tipo number, e então criamos esse “erro customizado”. Caso contrário, a função sum apresentaria um comportamento incorreto, pois não realizaria a soma dos valores corretamente.

//O operador new serve para criar um objeto personalizado ou nativo do JavaScript.

//A palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new, você cria uma cópia desse objeto, que será lançada como uma exceção no seu código.