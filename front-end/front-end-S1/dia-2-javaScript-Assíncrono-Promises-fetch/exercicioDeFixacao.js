fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(param => console.log(param))
