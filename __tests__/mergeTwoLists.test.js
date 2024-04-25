const mergeTwoLists = require('../src/mergeTwoLists');
const mergeTwoListsAlternative = require('../auxiliares/mergeTwoListsAlternative');
const generateTestData = require('../auxiliares/gerarDados');
const ListNode = require('../__mocks__/ListNode');
const toArray = require('../__mocks__/toArray');
const fs = require('fs');
const ValidarEntrada = require('../__mocks__/validateList.js');

//const validateList = require('../src/validateList');


const lista1valida = generateTestData2(50);
const lista2valida = generateTestData2(49);

let casosDeTeste1 = [
        {
            //1,2,4; 1,3,4
            "entrada1": { val: 1, next: { val: 2, next: { val: 4, next: null}}},
            "entrada2": { val: 1, next: { val: 3, next: { val: 4, next: null}}},
            "saida": { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null }}}}}}
        },

        {   //5,6,7; 1,2,3
            "entrada1": { val: 5, next: { val: 6, next: { val: 7, next: null}}},
            "entrada2": { val: 1, next: { val: 2, next: { val: 3, next: null}}},
            "saida": { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: { val: 6, next: { val: 7, next: null }}}}}}
        },

        {
            //1,1,1; 1,1,1
            "entrada1": { val: 1, next: { val: 1, next: { val: 1, next: null}}},
            "entrada2": { val: 1, next: { val: 1, next: { val: 1, next: null}}},
            "saida": { val: 1, next: { val: 1, next: { val: 1, next: { val: 1, next: { val: 1, next: { val: 1, next: null }}}}}}
        },

        {
            //60,40,3; 80,4,95
            "entrada1": { val: 60, next: { val: 40, next: { val: 3, next: null}}},
            "entrada2": { val: 80, next: { val: 4, next: { val: 95, next: null}}},
            "saida": { val: 3, next: { val: 4, next: { val: 40, next: { val: 60, next: { val: 80, next: { val: 95, next: null }}}}}}
        },

           
        {   //-100,-99,-98; 98,99,100
            "entrada1": { val: -100, next: { val: -99, next: { val: -98, next: null}}},
            "entrada2": { val: 98, next: { val: 99, next: { val: 100, next: null}}},
            "saida": { val: -100, next: { val: -99, next: { val: -98, next: { val: 98, next: { val: 99, next: { val: 100, next: null }}}}}}
        }, 

        {
            //-20,-2, -3; 80,4,95
            "entrada1": { val: -20, next: { val: -2, next: { val: -3, next: null}}},
            "entrada2": { val: 80, next: { val: 4, next: { val: 95, next: null}}},
            "saida": { val: -20, next: { val: -3, next: { val: -2, next: { val: 4, next: { val: 80, next: { val: 95, next: null }}}}}}
        },

        {
            //-20, 2, -3; 80,4,-95
            "entrada1": { val: -20, next: { val: 2, next: { val: -3, next: null}}},
            "entrada2": { val: 80, next: { val: 4, next: { val: -95, next: null}}},
            "saida": { val: -95, next: { val: -20, next: { val: -3, next: { val: 2, next: { val: 4, next: { val: 80, next: null }}}}}}
        },

        {
            //0,0,0,0,0,0
            "entrada1": { val: 0, next: { val: 0, next: { val: 0, next: null}}},
            "entrada2": { val: 0, next: { val: 0, next: { val: 0, next: null}}},
            "saida": { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: null }}}}}}
        },

        {
            //1,2,3,4,
            "entrada1": { val: 0, next: { val: 0, next: { val: 0, next: null}}},
            "entrada2": { val: 0, next: { val: 0, next: { val: 0, next: null}}},
            "saida": { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: null }}}}}}
        },

        //1 elemento na lista1 e 3 na lista2
        {
            "entrada1": { val: 1, next: null},
            "entrada2": { val: 0, next: { val: 5, next: { val: 40, next: null}}},
            "saida": { val: 0, next: { val: 1, next: { val: 5, next: { val: 40, next: null }}}}
        },

        //1 elemento nas duas listas
        {
            "entrada1": { val: 1, next: null},
            "entrada2": { val: 6, next: null},
            "saida": { val: 1, next: { val: 6, next: null }}
        },

          //0 elementos nas duas listas
          {
            "entrada1": null,
            "entrada2": null,
            "saida": null
        },
    ]
   
    //49 na lista 1 e 50 elementos na lista 2
    let casosDeTeste3 =  [
        {
            "entrada1": lista1valida,
            "entrada2": lista2valida,
            "saida": {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" } 
        }
    ]
    
    // Adicione mais casos de teste conforme necessário
      
const lista1invalida = generateTestData2(60);
const lista2invalida = generateTestData2(70);

const lista1invalida2 = generateTestData2(51);
const lista2invalida2 = generateTestData2(20);
     
    let casosDeTeste2 = [

    {   //caracteres especiais
        "entrada1": { val: -100, next: { val: '+', next: { val: '*', next: null}}},
        "entrada2": { val: 98, next: { val: 99, next: { val: 100, next: null}}},
        "saida": {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" }
    },

     {   //letras
        "entrada1": { val: 'a', next: { val: 'b', next: { val: -98, next: null}}},
        "entrada2": { val: 98, next: { val: 99, next: { val: 200, next: null}}},
        "saida":  {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" } 
    },

    {   //numeros decimais
        "entrada1": { val: 1.2, next: { val: 60, next: { val: 2.8, next: null}}},
        "entrada2": { val: 98, next: { val: 99, next: { val: -140, next: null}}},
        "saida":   {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" } 
    },

    //mais de 50 elementos
    {  
        "entrada1": lista1invalida, //60 elementos
        "entrada2": lista2invalida, //70 elementos
        "saida":  {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" } 
    }, 

    {   
        "entrada1": lista1invalida2, //51 elementos
        "entrada2": lista2invalida2, //20 elementos
        "saida":  {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" } 
    }
]

let casosDeTeste4 = [
    {
        //1,2,4; 1,3,4
        "entrada1": { val: 1, next: { val: 2, next: { val: 4, next: null}}},
        "entrada2": { val: 1, next: { val: 3, next: { val: 4, next: null}}},
        "saida": { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null }}}}}}
    }

]

const testData = generateTestData();

fs.writeFileSync('data.json', JSON.stringify(testData, null, 2));

const jsonData = fs.readFileSync('data.json');
const testDataFromFile = JSON.parse(jsonData);

//Mocks
/* jest.mock('../__mocks__/ListNode', () => {
    return jest.fn().mockImplementation((val) => {
        return { val: val, next: null };
    });
}); */

ListNode.ListNode = jest.fn();
//toArray.toArray = jest.fn();
mergeTwoLists.ListNode = jest.fn()
mergeTwoLists.validateList = jest.fn()
jest.mock('../__mocks__/validateList.js', () => jest.fn());



describe('mergeTwoLists', () => {
    test.each(testDataFromFile)(
        'ambas as implementações devem produzir resultados idênticos',
        (list1, list2) => {
            //ValidarEntrada.mockReturnValue(true);
            let mergedList = mergeTwoLists(list1, list2);
            let mergedListAlternative = mergeTwoListsAlternative(list1, list2);
            expect(mergedList).toEqual(mergedListAlternative);
            expect(toArray(mergedList)).not.toContain(200);      
             
            expect(ListNode).toHaveLength(2);      
            expect(toArray).toHaveLength(1);  
          
                    
            //expect(ValidarEntrada).toHaveReturnedWith(true)
            //ValidarEntrada.mockClear();          

        }
    );

    casosDeTeste1.forEach(function (casoTeste) {
        test('Mesclando ' + toArray(casoTeste.entrada1) + ' e ' + toArray(casoTeste.entrada2) + ' igual a ' + toArray(casoTeste.saida), () => {
            ValidarEntrada.mockReturnValue(true);

            expect(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2)).toEqual(casoTeste.saida);
            expect(toArray(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2))).not.toContain(3000);
            
       });
    });

    casosDeTeste2.forEach(function (casoTeste) {
        test('Mesclando ' + toArray(casoTeste.entrada1) + ' e ' + toArray(casoTeste.entrada2) + ' igual a ' + (casoTeste.saida), () => {
            ValidarEntrada.mockReturnValue(false);
            expect(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2)).toEqual(casoTeste.saida);
            expect(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2)).toMatchObject(casoTeste.saida);
            //expect(toArray(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2))).not.toContain(3000);
       });
    });

    casosDeTeste3.forEach(function (casoTeste) {
        test('Mesclando ' + toArray(casoTeste.entrada1) + ' e ' + toArray(casoTeste.entrada2) + ' igual a ' + (casoTeste.saida), () => {
            ValidarEntrada.mockReturnValue(true);
            expect(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2)).not.toEqual(casoTeste.saida);
            expect(toArray(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2))).not.toContain(3000);
       });
    });

    casosDeTeste4.forEach(function (casoTeste) {
        test('Mesclando ' + toArray(casoTeste.entrada1) + ' e ' + toArray(casoTeste.entrada2) + ' igual a ' + (casoTeste.saida), () => {
            ValidarEntrada.mockReturnValue(true);
            expect(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2)).toMatchObject(casoTeste.saida);
            expect(toArray(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2))).toContain(1);
            expect(toArray(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2))).toContain(2);
            expect(toArray(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2))).not.toContain(1000);
       });
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funções para gerar lista com mais de 50 nos


function generateRandomLinkedList(length, minVal, maxVal) {
    if (length <= 0) return null;

    let head = new ListNode(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
    let current = head;

    for (let i = 1; i < length; i++) {
        let newNode = new ListNode(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
        current.next = newNode;
        current = newNode;
    }

    return head;
}

function generateTestData2(tamanho) {
    let testData = [];

   
        let length = Math.floor(tamanho); // Comprimento aleatório entre 0 e 50
        let list1 = generateRandomLinkedList(length, -100, 100); // Valores aleatórios entre -100 e 100

      

    return list1;
} 