const validarEntrada  = require('./validarEntrada.js');

function intToRoman(num){

    if(validarEntrada(num)){
        const romanValues = 
        [{ value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }];

        let roman = '';

        for (let i = 0; i < romanValues.length; i++) {
            while (num >= romanValues[i].value) {
                roman += romanValues[i].numeral;
                num -= romanValues[i].value;
            }
        }

        return roman;
    }
    
    else{
        return "Valor invalido. Insira valores numericos inteiros entre 1 e 3999"
    }
} 

module.exports = intToRoman;