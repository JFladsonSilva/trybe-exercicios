// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino.

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
// Como você pode ver, a função Object.assign recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.
//EXEMPLO
const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    const person = {
        name: 'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const clone = Object.assign(person, lastName);
      
      console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(person); // { name: 'Roberto', lastName: 'Silva' }
    //Nesse outro exemplo, o clone é exatamente igual ao objeto person, e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades.


    // Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo.

    const person = {
        name:'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const newPerson = Object.assign({},person,lastName);
      newPerson.name = 'Gilberto';
      console.log(newPerson);
      console.log(person);