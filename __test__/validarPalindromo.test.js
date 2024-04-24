const validarPalindromo = require('../src/validarPalindromo.js');
const formatarEntrada = require('../src/formatarEntrada.js');
const gerar200000CaracteresPalindromo = require('./gerarCaracteres.js').gerar200000CaracteresPalindromo;
const gerar200001CaracteresPalindromo = require('./gerarCaracteres.js').gerar200001CaracteresPalindromo;
const gerar200000Caracteres = require('./gerarCaracteres.js').gerar200000Caracteres;

//jest.mock('../src/formatarEntrada.js', () => {return jest.fn((str) => {return str})});

jest.mock('../src/formatarEntrada.js', () => {
    return jest.fn((str) => {
        if (str.length > 200000 || str.length < 1) {
            throw new Error('Entrada invalida. Insira uma String entre 1 ate 200000 caracteres');
        } else {
            return str;
        }
    });
});


describe('Verifica se uma String é um Palindromo', () => {

    describe('Entrada valida - É palindromo', () => {
        test('Teste de limíte mínimo permitido - único caractere', () => {
            formatarEntrada.mockReturnValueOnce('a');
            expect(validarPalindromo('a')).toBe(true);

            formatarEntrada.mockReturnValueOnce('f');
            expect(validarPalindromo('f')).toBe(true);
        });

        test('Teste de limite máximo permitido - 200000 caracteres', () => {
            formatarEntrada.mockReturnValueOnce(gerar200000CaracteresPalindromo());
            expect(validarPalindromo(gerar200000CaracteresPalindromo())).toBe(true);
        });

        test('Apenas espaço', () => {
            formatarEntrada.mockReturnValueOnce(' ');
            expect(validarPalindromo(' ')).toBe(true);

            formatarEntrada.mockReturnValueOnce('  ');
            expect(validarPalindromo('  ')).toBe(true);
        });

        test('Apenas minusculas', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo('ana')).toBe(true);

            formatarEntrada.mockReturnValueOnce('bob');
            expect(validarPalindromo('bob')).toBe(true);
        });

        test('Apenas maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo('ANA')).toBe(true);

            formatarEntrada.mockReturnValueOnce('bob');
            expect(validarPalindromo('BOB')).toBe(true);
        });

        test('Minusculas e maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo('aNA')).toBe(true);

            formatarEntrada.mockReturnValueOnce('bob');
            expect(validarPalindromo('Bob')).toBe(true);
        });

        test('Números', () => {
            formatarEntrada.mockReturnValueOnce('1ana1');
            expect(validarPalindromo('1ana1')).toBe(true);

            formatarEntrada.mockReturnValueOnce('111');
            expect(validarPalindromo('111')).toBe(true);
        });

        test('Palavra existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('arara');
            expect(validarPalindromo('arara')).toBe(true);

            formatarEntrada.mockReturnValueOnce('radar');
            expect(validarPalindromo('radar')).toBe(true);
        });

        test('Palavra não existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('aaa');
            expect(validarPalindromo('aaa')).toBe(true);

            formatarEntrada.mockReturnValueOnce('bbbb');
            expect(validarPalindromo('bbbb')).toBe(true);
        });

        test('Frase', () => {
            formatarEntrada.mockReturnValueOnce('amoraroma');
            expect(validarPalindromo('Amor a Roma')).toBe(true);

            formatarEntrada.mockReturnValueOnce('socorrammesubinoonibusemmarrocos');
            expect(validarPalindromo('Socorram-me, subi no ônibus em Marrocos')).toBe(true);
        });

        test('Espaços, caracteres e caracteres especiais', () => {
            formatarEntrada.mockReturnValueOnce('ana');
            expect(validarPalindromo(' ãnà   ')).toBe(true);

            formatarEntrada.mockReturnValueOnce('bob');
            expect(validarPalindromo(' bôb ')).toBe(true);
        });
    });

    describe('Entrada valida - Não é palindromo', () => {
        test('Teste de limite máximo permitido - 200000 caracteres', () => {
            formatarEntrada.mockReturnValueOnce(gerar200000Caracteres());
            expect(validarPalindromo(gerar200000Caracteres())).toBe(false);
        });

        test('Apenas minusculas', () => {
            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo('bola')).toBe(false);

            formatarEntrada.mockReturnValueOnce('apito');
            expect(validarPalindromo('apito')).toBe(false);
        });

        test('Apenas maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('apito');
            expect(validarPalindromo('APITO')).toBe(false);

            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo('BOLA')).toBe(false);
        });

        test('Minusculas e maiusculas', () => {
            formatarEntrada.mockReturnValueOnce('apito');
            expect(validarPalindromo('aPITo')).toBe(false);

            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo('Bola')).toBe(false);
        });

        test('Números', () => {
            formatarEntrada.mockReturnValueOnce('3bola3');
            expect(validarPalindromo('3bola3')).toBe(false);

            formatarEntrada.mockReturnValueOnce('113');
            expect(validarPalindromo('113')).toBe(false);
        });

        test('Palavra existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('joao');
            expect(validarPalindromo('joão')).toBe(false);

            formatarEntrada.mockReturnValueOnce('coelho');
            expect(validarPalindromo('coelho')).toBe(false);
        });

        test('Palavra não existente no dicionario', () => {
            formatarEntrada.mockReturnValueOnce('aaabbc');
            expect(validarPalindromo('aaabbc')).toBe(false);

            formatarEntrada.mockReturnValueOnce('eeoocc11');
            expect(validarPalindromo('eeoocc11')).toBe(false);
        });

        test('Caracteres especiais', () => {
            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo('bólã')).toBe(false);

            formatarEntrada.mockReturnValueOnce('ápito');
            expect(validarPalindromo('ápîto')).toBe(false);
        });

        test('Frase', () => {
            formatarEntrada.mockReturnValueOnce('fuiaobaile');
            expect(validarPalindromo('fui ao baile')).toBe(false);

            formatarEntrada.mockReturnValueOnce('eugostodesorvete');
            expect(validarPalindromo('eu gosto de sorvete')).toBe(false);
        });

        test('Espaços, caracteres e caracteres especiais', () => {
            formatarEntrada.mockReturnValueOnce('bola');
            expect(validarPalindromo(' bólà   ')).toBe(false);

            formatarEntrada.mockReturnValueOnce('apito');
            expect(validarPalindromo(' âpítõ ')).toBe(false);
        });

    });

    describe('Entrada inválida', () => {
        test('String com tamanho menor que 1 caractere', () => {
            formatarEntrada.mockReturnValueOnce('entrada invalida');
            expect(validarPalindromo('')).toBe('Entrada invalida. Insira uma String entre 1 ate 200000 caracteres');
        });

        test('String com tamanho maior que 200000 caracteres', () => {
            formatarEntrada.mockReturnValueOnce('entrada invalida');
            expect(validarPalindromo(gerar200001CaracteresPalindromo())).toBe('Entrada invalida. Insira uma String entre 1 ate 200000 caracteres');
        });
    });
});

