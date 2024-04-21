function validarEntrada(num){
    if (num >= 1 && num <= 3999 && Number.isInteger(num)) {
        return true;
    }
    else{
        return false;
    }   
}

module.exports = validarEntrada;
