function celsiusParaFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const tempCelsius = 25;
console.log(celsiusParaFahrenheit(tempCelsius)); // Result: 77
