const validarPalindromo = require('../src/validarPalindromo.js');
const formatarEntrada = require('../src/formatarEntrada.js');
const gerar200000CaracteresPalindromo = require('./scripts/gerarCaracteres').gerar200000CaracteresPalindromo;
const gerar200001CaracteresPalindromo = require('./scripts/gerarCaracteres.js').gerar200001CaracteresPalindromo;
const gerar200000Caracteres = require('./scripts/gerarCaracteres.js').gerar200000Caracteres;

jest.mock('../src/formatarEntrada.js', () => {
    return jest.fn((str) => {
        return str;
    });
});

describe('Verifica se uma String é um Palindromo', () => {

    afterEach(() => {
        expect(formatarEntrada).toHaveBeenCalled();
        formatarEntrada.mockClear();
    });

    describe('Entrada valida - É palindromo', () => {

        test('Teste de limíte mínimo permitido - único caractere', () => {
            formatarEntrada.mockReturnValueOnce('a');
            expect(validarPalindromo('a')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('a');
        });

        test('Teste de limite máximo permitido - 200000 caracteres', () => {
            formatarEntrada.mockReturnValueOnce(gerar200000CaracteresPalindromo());
            expect(validarPalindromo(gerar200000CaracteresPalindromo())).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith(gerar200000CaracteresPalindromo());
        });

        test('Apenas espaço', () => {
            formatarEntrada.mockReturnValueOnce(' ');
            expect(validarPalindromo(' ')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith(' ');
        });

        test('Apenas minusculas', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo('ana')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('ana');
            expect(formatarEntrada('ana')).toEqual(expect.stringMatching('ana'));
            expect(formatarEntrada('ana')).toEqual(expect.stringContaining('an'));
        });

        test('Apenas maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo('ANA')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('ana');
            expect(formatarEntrada('ANA')).toEqual(expect.stringMatching('ana'));
        });

        test('Minusculas e maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo('aNA')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('ana');
        });

        test('Números', () => {
            formatarEntrada.mockReturnValueOnce('1ana1');
            expect(validarPalindromo('1ana1')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('1ana1');

            formatarEntrada.mockReturnValueOnce('111');
            expect(validarPalindromo('111')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('111');
        });

        test('Palavra existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('arara');
            expect(validarPalindromo('arara')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('arara');
            expect(formatarEntrada('arara')).toEqual(expect.stringContaining('ar'));
            expect(formatarEntrada('arara')).toEqual(expect.not.stringContaining('bc'));
        });

        test('Palavra não existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('aaa');
            expect(validarPalindromo('aaa')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('aaa');
        });

        test('Frase', () => {
            formatarEntrada.mockReturnValueOnce('amoraroma');
            expect(validarPalindromo('Amor a Roma')).toBe(true);
            expect(formatarEntrada('Amor a Roma')).toEqual(expect.stringMatching('amoraroma'));
            expect(formatarEntrada('Amor a Roma')).toEqual(expect.stringContaining('amor'));
           
            expect(formatarEntrada).toHaveReturnedWith('amoraroma');
        });

        test('Espaços, caracteres e caracteres especiais', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo(' ãnà   ')).toBe(true);
            expect(formatarEntrada).toHaveReturnedWith('ana');
        });
    });

    describe('Entrada valida - Não é palindromo', () => {
    
        test('Teste de limite máximo permitido - 200000 caracteres', () => {
            formatarEntrada.mockReturnValueOnce(gerar200000Caracteres());
            expect(validarPalindromo(gerar200000Caracteres())).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith(gerar200000Caracteres());
        });

        test('Apenas minusculas', () => {
            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo('bola')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('bola');
        });

        test('Apenas maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('apito');
            expect(validarPalindromo('APITO')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('apito');
        });

        test('Minusculas e maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('apito');
            expect(validarPalindromo('aPITo')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('apito');
        });

        test('Números', () => {
            formatarEntrada.mockReturnValueOnce('3bola3');
            expect(validarPalindromo('3bola3')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('3bola3');

            formatarEntrada.mockReturnValueOnce('113');
            expect(validarPalindromo('113')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('113');
        });

        test('Palavra existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('joao');
            expect(validarPalindromo('joão')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('joao');
        });

        test('Palavra não existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('aaabbc');
            expect(validarPalindromo('aaabbc')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('aaabbc');
        });

        test('Caracteres especiais', () => {
            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo('bólã')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('bola');
        });

        test('Frase', () => {
            formatarEntrada.mockReturnValueOnce('fuiaobaile');
            expect(validarPalindromo('fui ao baile')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('fuiaobaile');
        });

        test('Espaços, caracteres e caracteres especiais', () => {
            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo(' bólà   ')).toBe(false);
            expect(formatarEntrada).toHaveReturnedWith('bola');
        });

    });

    describe('Entrada inválida', () => {
        
        test('String com tamanho menor que 1 caractere', () => {
            formatarEntrada.mockReturnValueOnce('entrada invalida');
            expect(validarPalindromo('')).toBe('Entrada invalida. Insira uma String entre 1 ate 200000 caracteres');
            expect(formatarEntrada).toHaveReturnedWith('entrada invalida');

        });

        test('String com tamanho maior que 200000 caracteres', () => {
            formatarEntrada.mockReturnValueOnce('entrada invalida');
            expect(validarPalindromo(gerar200001CaracteresPalindromo())).toBe('Entrada invalida. Insira uma String entre 1 ate 200000 caracteres');
            expect(formatarEntrada).toHaveReturnedWith('entrada invalida');
            
        });
    });

    const fs = require('fs');
    const testes = JSON.parse(fs.readFileSync('__test__/json/casosTeste.json', 'utf8'));

    describe('Testes aleatórios lidos do arquivo json', () => {
    
        testes.forEach((teste, index) => {
            beforeEach(() => {
                formatarEntrada.mockReturnValueOnce(teste.entradaFormatada);
            });

            test(`Teste ${index + 1}`, () => {
                expect(validarPalindromo(teste.entrada)).toBe(teste.saidaEsperada);
                expect(formatarEntrada).toHaveBeenCalledWith(teste.entrada);
            });
        });
    });
});

