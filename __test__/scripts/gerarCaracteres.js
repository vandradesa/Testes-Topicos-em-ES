function gerar200000CaracteresPalindromo() {
    let str = "";
    
    for (let i = 0; i < 200000; i++) {
        str += "a";
    }
    
    return str;
}

function gerar200001CaracteresPalindromo() {
    let str = "";
    
    for (let i = 0; i < 200001; i++) {
        str += "a";
    }
    
    return str;
}

function gerar200000Caracteres() {
    let str = "";

    for (let i = 0; i < 200000; i++) {
        if (i <= 10){
            str += "a";
        }
        

        if (i > 10){
            str += "b";
        }
    }

    return str;
}

module.exports = {gerar200000CaracteresPalindromo, gerar200001CaracteresPalindromo, gerar200000Caracteres};