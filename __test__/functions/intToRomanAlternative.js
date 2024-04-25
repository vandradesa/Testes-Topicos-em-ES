const validarEntrada = require('../../src/validarEntrada');

function intToRomanAlternative(num) {
    
    if (validarEntrada(num)) {
        const romanSymbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
        const romanValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

        let roman = '';

        for (let i = romanValues.length - 1; i >= 0; i--) {
            while (num >= romanValues[i]) {
                roman += romanSymbols[i];
                num -= romanValues[i];
            }
        }

        return roman;
    }

    else{
        return "Valor invalido. Insira valores numericos inteiros entre 1 e 3999";
    }
}

module.exports = intToRomanAlternative;
