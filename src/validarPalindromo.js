const formatarEntrada = require('./formatarEntrada')

function validarPalindromo(str) {
    textoFormatado = formatarEntrada(str)

    if(textoFormatado != 'entrada invalida'){
        const textoInvertido = textoFormatado.split('').reverse().join('');

        if (textoFormatado === textoInvertido){
            return true;
        }
        
        else{
            return false;
        }
    }

    else{
        return "Entrada invalida. Insira uma String entre 1 ate 200000 caracteres"
    }
}
console.log((str = '').length);
console.log(validarPalindromo(''));
