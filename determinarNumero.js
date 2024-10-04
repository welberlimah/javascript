function verificarNumero(n) {
    if (n > 0) {
        return "Positivo";
    } else if (n < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

const numero = -3;
console.log(verificarNumero(numero)); // Result: Negativo
