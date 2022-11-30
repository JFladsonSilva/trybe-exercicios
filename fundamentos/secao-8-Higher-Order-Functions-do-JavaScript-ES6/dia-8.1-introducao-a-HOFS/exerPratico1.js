//crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

const generatedEmail = (fullName) => {
    const email = `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;

    return { fullName, email: `${email}` };
}
console.log(generatedEmail('fladson SIlva'));





const newEmployees = () => {
    const employees = {
      id1: generatedEmail('PedroGuerra'),
      id2: generatedEmail('LuizaDrumond'),
      id3: generatedEmail('CarlaPaiva'), 
    }
    return employees;
  };

  console.log(newEmployees());