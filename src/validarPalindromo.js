const formatarEntrada = require('./formatarEntrada')

function validarPalindromo(str) {
    str = formatarEntrada(str)

    if(str === 'entrada invalida'){
        return "Entrada invalida. Insira uma String entre 1 ate 200000 caracteres";
    }

    else{
        const strInvertida = str.split('').reverse().join('');

        if (str === strInvertida){
            return true;
        }
        
        else{
            return false;
        }
    }
}

module.exports = validarPalindromo;


