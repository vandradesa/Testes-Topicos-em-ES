const mergeTwoLists = require('../mergeTwoLists');
const mergeTwoListsAlternative = require('../auxiliares/mergeTwoListsAlternative');
const generateTestDataArrays = require('../auxiliares/gerarDados');
const ListNode = require('../auxiliares/ListNode');
const toArray = require('../toArray');
const fs = require('fs');

let casosDeTeste = [
    {
        "entrada1": { val: 1, next: { val: 2, next: { val: 4, next: null}}},
        "entrada2": { val: 1, next: { val: 3, next: { val: 4, next: null}}},
        "saida": { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null }}}}}}
    },
    {
        "entrada1": { val: 5, next: { val: 6, next: { val: 7, next: null}}},
        "entrada2": { val: 1, next: { val: 2, next: { val: 3, next: null}}},
        "saida": { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: { val: 6, next: { val: 7, next: null }}}}}}
    },
    // Adicione mais casos de teste conforme necessário
]

const testData = generateTestDataArrays();

fs.writeFileSync('data.json', JSON.stringify(testData, null, 2));

const jsonData = fs.readFileSync('data.json');
const testDataFromFile = JSON.parse(jsonData);

jest.mock('../auxiliares/ListNode', () => {
    return jest.fn().mockImplementation((val) => {
        return { val: val, next: null };
    });
});


describe('mergeTwoLists', () => {
    test.each(testDataFromFile)(
        'ambas as implementações devem produzir resultados idênticos',
        (list1, list2) => {
            let mergedList = mergeTwoLists(list1, list2);
            let mergedListAlternative = mergeTwoListsAlternative(list1, list2);
            expect(mergedList).toEqual(mergedListAlternative);   
            expect(ListNode).toHaveBeenCalled();        
        }
    );

    casosDeTeste.forEach(function (casoTeste) {
        test('Mesclando ' + toArray(casoTeste.entrada1) + ' e ' + toArray(casoTeste.entrada2) + ' igual a ' + toArray(casoTeste.saida), () => {
            expect(mergeTwoLists(casoTeste.entrada1, casoTeste.entrada2)).toEqual(casoTeste.saida);
        });
    });



});




