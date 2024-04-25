const fs = require('fs');
const validarEntrada = require('../../src/validarEntrada.js');
const intToRomanAlternative = require('../functions/intToRomanAlternative.js');

function gerarInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarFloat(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min).toFixed(2);
}

function gerarString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/`~';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function gerarCasosTesteInteiro(index) {
    const num = gerarInt(-500, 5000);
    const saidaEsperada = intToRomanAlternative(num);
    const validacao = validarEntrada(num);
    return {
        teste: index.toString(),
        entrada: num,
        validacao: validacao,
        saidaEsperada: saidaEsperada
    };
}

function gerarCasosTesteDecimal(index) {
    const num = gerarFloat(-5000, 5000);
    const saidaEsperada = intToRomanAlternative(num);
    const validacao = validarEntrada(num);
    return {
        teste: index.toString(),
        entrada: num,
        validacao: validacao,
        saidaEsperada: saidaEsperada
    };
}

function gerarCasosTesteString(index){
    const str = gerarString(6);
    const saidaEsperada = intToRomanAlternative(str);
    const validacao = validarEntrada(str);
    return {
        teste: index.toString(),
        entrada: str,
        validacao: validacao,
        saidaEsperada: saidaEsperada
    };
}

function writeTestCasesToFile() {
    const casosTeste = [];

    for (let i = 0; i < 965; i++) {

        if (i <= 650){
            casosTeste.push(gerarCasosTesteInteiro(i+1));
        }

        else if (i <= 770){
            casosTeste.push(gerarCasosTesteDecimal(i+1));
        }

        else{
            casosTeste.push(gerarCasosTesteString(i+1));
        }
        
    }

    const jsonContent = JSON.stringify(casosTeste, null, 2);
    fs.writeFileSync('__test__/json/casosTeste.json', jsonContent);
}

writeTestCasesToFile();

