const formatarEntrada = require('../../src/formatarEntrada');

function validarPalindromoAlternativo(str) {
    str = formatarEntrada(str);

    if(str === 'entrada invalida'){
        return "Entrada invalida. Insira uma String entre 1 ate 200000 caracteres";
    }

    else{
        let inicio = 0;
        let fim = str.length - 1;

        while (inicio < fim) {
        
            if (str[inicio] !== str[fim]) {
                return false;
            }
        
            inicio++;
            fim--;
        }
        return true;
    }
}

module.exports = validarPalindromoAlternativo;