// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });  
 
  // o then basicamente é uma função para retornar o valor de uma promise com o resultado resolved.
  resolvedPromise().then((response) => {
    console.log(response);
  })

  /////////////////////////////////////////////////////////////////////////
  fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`"${data.quote}" | ${data.author}`));
  //De olho na dica 👀: Você reparou que usamos dois .then seguidos após fazer o fetch? Esse processo é chamado de encadeamento. Podemos usar esse recurso retornando um valor dentro de um .then. O valor retornado será recebido pelo próximo .then encadeado. No caso acima, estamos retornando o valor de response.json() para o próximo .then, que recebe o valor através da variável data.

  //Anota aí 📝: Você pode ter quantos then encadeados forem necessários, mas geralmente costuma-se ter apenas um catch, pois esse catch conseguirá capturar um erro que seja disparado em qualquer um dos then anteriores.