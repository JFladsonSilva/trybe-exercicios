const sorteiaNumero = (number) => {
    const numberSorted = Math.round(Math.random() * 5);
    if(number === numberSorted) {
        return 'Parabéns, você ganhou';
    }
    return 'Tente novamente';
}

