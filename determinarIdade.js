function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

const idadePessoa = 16;
console.log(verificarIdade(idadePessoa)); // Result: Menor de idade
