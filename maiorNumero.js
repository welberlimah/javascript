function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "São iguais";
    }
}

const num1 = 5;
const num2 = 10;
console.log(maiorNumero(num1, num2)); // Result: 10