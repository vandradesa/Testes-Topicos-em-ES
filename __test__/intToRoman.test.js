const intToRoman = require('../src/intToRoman.js');
const validarEntrada = require('../src/validarEntrada.js');

jest.mock('../src/validarEntrada.js', () => jest.fn());

describe('Converte Valor Inteiro para Romano', () => {

  describe('Testes com entradas válidas', () => {

    beforeEach(() => {
      validarEntrada.mockReturnValue(true);
    });

    afterEach(() => {
      expect(validarEntrada).toHaveBeenCalled();
      expect(validarEntrada).toHaveReturnedWith(true)
      validarEntrada.mockClear();
    });

    test('Entrada com saída esperada único simbolo romano I', () => {
      expect(intToRoman(1)).toBe('I');
    });

    test('Entrada com saída esperada único simbolo romano V', () => {
      expect(intToRoman(5)).toBe('V');
    });

    test('Entrada com saída esperada único simbolo romano X', () => {
      expect(intToRoman(10)).toBe('X');
    });

    test('Entrada com saída esperada único simbolo romano L', () => {
      expect(intToRoman(50)).toBe('L');
    });

    test('Entrada com saída esperada único simbolo romano C', () => {
      expect(intToRoman(100)).toBe('C');
    });

    test('Entrada com saída esperada único simbolo romano D', () => {
      expect(intToRoman(500)).toBe('D');
    });
    
    test('Entrada com saída esperada único simbolo romano M', () => {
      expect(intToRoman(1000)).toBe('M');
    });

    test('Entrada com saída esperada símbolo romano I subtraindo o termo posterior V', () => {
        expect(intToRoman(4)).toBe('IV');
    });

    test('Entrada com saída esperada símbolo romano I subtraindo o termo posterior X', () => {
      expect(intToRoman(29)).toBe('XXIX');
      expect(intToRoman(109)).toBe('CIX');
  });

    test('Entrada com saída esperada símbolo romano X subtraindo o termo posterior L', () => {
      expect(intToRoman(40)).toBe('XL');
    });

    test('Entrada com saída esperada símbolo romano X subtraindo o termo posterior C', () => {
      expect(intToRoman(1990)).toBe('MCMXC');
      expect(intToRoman(992)).toBe('CMXCII');
    });

    test('Entrada com saída esperada símbolo romano C subtraindo o termo posterior D', () => {
      expect(intToRoman(1410)).toBe('MCDX');
      expect(intToRoman(400)).toBe('CD');
    });

    test('Entrada com saída esperada símbolo romano C subtraindo o termo posterior M ', () => {
      expect(intToRoman(990)).toBe('CMXC');
      expect(intToRoman(1410)).toBe('MCDX');
    });

    test('Testando o valor limite minimo', () => {
      expect(intToRoman(1)).toBe('I');
    });

    test('Testando o valor limite maximo', () => {
      expect(intToRoman(3999)).toBe('MMMCMXCIX');
    });

    test('Saída - 2 simbolos romanos', () => {
      expect(intToRoman(11)).toBe('XI');
    });

    test('Saída - 3 simbolos romanos', () => {
      expect(intToRoman(12)).toBe('XII');
    });

    test('Saída - 4 simbolos romanos', () => {
      expect(intToRoman(13)).toBe('XIII');
    });

    test('Saída - 5 simbolos romanos', () => {
      expect(intToRoman(614)).toBe('DCXIV');
    });

    test('Saída - 6 simbolos romanos', () => {
      expect(intToRoman(2245)).toBe('MMCCXLV');
    });

    test('Saída - 7 simbolos romanos', () => {
      expect(intToRoman(3665)).toBe('MMMDCLXV');
    });

    test('Saída - 8 simbolos romanos', () => {
      expect(intToRoman(2999)).toBe('MMCMXCIX');
    });

    test('Saída - 9 simbolos romanos', () => {
      expect(intToRoman(3999)).toBe('MMMCMXCIX');
    });

    test('Saída - 10 simbolos romanos', () => {
      expect(intToRoman(3997)).toBe('MMMCMXCVII');
    });

    test('Saída - 11 simbolos romanos', () => {
      expect(intToRoman(3998)).toBe('MMMCMXCVIII');
    });

    test('Saída - 12 simbolos romanos', () => {
      expect(intToRoman(2738)).toBe('MMDCCXXXVIII');
    });

    test('Saída - 13 simbolos romanos', () => {
      expect(intToRoman(2838)).toBe('MMDCCCXXXVIII');
    });

    test('Saída - 14 simbolos romanos', () => {
      expect(intToRoman(3838)).toBe('MMMDCCCXXXVIII');
    });

  });

  describe('Testes com entradas inválidas', () => {
    beforeEach(() => {
      validarEntrada.mockReturnValue(false);
    });

    afterEach(() => {
      expect(validarEntrada).toHaveBeenCalled();
      expect(validarEntrada).toHaveReturnedWith(false)
      validarEntrada.mockClear();
    });

    test('Caracteres especiais', () => {
      expect(intToRoman("@")).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman("!")).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman("#")).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });

    test('Letras', () => {
      expect(intToRoman("a")).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman("b")).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman("c")).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });

    test('Valor decimal', () => {
      expect(intToRoman(2.5)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman(3.41)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman(13.60)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });

    test('Valores abaixo do limite mínimo -> 1', () => {
      expect(intToRoman(-30)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman(-400)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman(-5)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });

    test('Valores acima do limite máximo -> 3999', () => {
      expect(intToRoman(5000)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman(4001)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
      expect(intToRoman(10000)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });

    test('Testando valor mais próximo abaixo do limite -> 0', () => {
      expect(intToRoman(0)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });

    test('Testando valor mais próximo acima do limite -> 4000', () => {
      expect(intToRoman(4000)).toBe("Valor invalido. Insira valores numericos inteiros entre 1 e 3999");
    });    
  });

  const fs = require('fs');
  const testesJSON = fs.readFileSync('__test__/json/casosTeste.json', 'utf8');
  const testes = JSON.parse(testesJSON);

  describe('Testes aleatórios lidos do arquivo json', () => {
  
    testes.forEach((teste, index) => {
      beforeEach(() => {
        validarEntrada.mockReturnValueOnce(teste.validacao);
      });

      afterEach(() => {
        validarEntrada.mockClear();
      });

      test(`Teste ${index + 1}`, () => {
        //console.log(`Executando teste ${index + 1} - Entrada: ${teste.entrada}, Saída esperada: ${teste.saidaEsperada}, Retorno Validacao: ${teste.validacao}`);
        expect(intToRoman(teste.entrada)).toBe(teste.saidaEsperada);
        expect(validarEntrada).toHaveBeenCalledWith(teste.entrada);
      });
    });
  });
});