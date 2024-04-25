const validarPalindromoAlternativo = require('../functions/validarPalindromoAlternativo');
const fs = require('fs');

function gerarPalindromo(tamanho) {
    let resultado = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tamanho; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}

function gerarString(tamanho) {
    let resultado = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tamanho; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}

const palindromos = [];
const naoPalindromos = [];

// Gerar 400 palíndromos
while (palindromos.length < 400) {
    let strAleatoria = gerarPalindromo(6);
    if (validarPalindromoAlternativo(strAleatoria)) {
        palindromos.push(strAleatoria);
    }
}

// Gerar 500 não palíndromos
while (naoPalindromos.length < 473) {
    let strAleatoria = gerarString(5);
    if (!validarPalindromoAlternativo(strAleatoria)) {
        naoPalindromos.push(strAleatoria);
    }
}

let casosTeste = [];

try {
    const data = fs.readFileSync('__test__/json/casosTeste.json', 'utf8');
    casosTeste = JSON.parse(data);
} catch (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
}

// Salvar a quantidade atual de casos de teste antes de adicionar os novos
const quantidadeAtualCasosTeste = casosTeste.length;

// Adicionar os novos casos de teste ao final da lista existente
casosTeste.push(...palindromos.map((str, index) => ({
    teste: String(quantidadeAtualCasosTeste + index + 1),
    entrada: str,
    entradaFormatada: str,
    saidaEsperada: validarPalindromoAlternativo(str)
})));

casosTeste.push(...naoPalindromos.map((str, index) => ({
    teste: String(quantidadeAtualCasosTeste + index + palindromos.length + 1),
    entrada: str,
    entradaFormatada: str,
    saidaEsperada: validarPalindromoAlternativo(str)
})));

fs.writeFile('__test__/json/casosTeste.json', JSON.stringify(casosTeste, null, 2), (err) => {
    if (err) {
        console.error("Erro ao escrever no arquivo JSON:", err);
    } else {
        console.log(`Adicionados ${palindromos.length + naoPalindromos.length} casos de teste ao final do arquivo "casosTeste.json".`);
    }
});
