const formatarEntrada = require('./formatarEntrada')

function validarPalindromo(str) {
    textoFormatado = formatarEntrada(str)

    if(textoFormatado === 'entrada invalida'){
        return "Entrada invalida. Insira uma String entre 1 ate 200000 caracteres";
    }

    else{
        const textoInvertido = textoFormatado.split('').reverse().join('');

        if (textoFormatado === textoInvertido){
            return true;
        }
        
        else{
            return false;
        }
    }
}

module.exports = validarPalindromo;


