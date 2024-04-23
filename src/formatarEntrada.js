function formatarEntrada(str){

    if (str.trim().length === 0 && str.length >= 1){
        return str;
    }

    else if (str.length >= 1 && str.length <= 200000){
        return textoFormatado = str.toLowerCase().replace(/[\W_]/g, '');
    }

    else{
        return 'entrada invalida';
    }
}
module.exports = formatarEntrada;