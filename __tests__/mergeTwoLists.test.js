const mergeTwoLists = require('../src/mergeTwoLists');
const mergeTwoListsAlternative = require('../src/mergeTwoListsAlternative');
const ListNode = require('../src/ListNode');
const fs = require('fs');

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

function generateTestData() {
    let testData = [];

    for (let i = 0; i < 980; i++) {
        let length = Math.floor(Math.random() * 51); // Comprimento aleatório entre 0 e 50
        let list1 = generateRandomLinkedList(length, -100, 100); // Valores aleatórios entre -100 e 100
        let list2 = generateRandomLinkedList(length, -100, 100); // Valores aleatórios entre -100 e 100
        testData.push([list1, list2]);
    }

    return testData;
}

const testData = generateTestData();

fs.writeFileSync('data.json', JSON.stringify(testData, null, 2));

const jsonData = fs.readFileSync('data.json');
const testDataFromFile = JSON.parse(jsonData);

describe('mergeTwoLists', () => {
    test.each(testDataFromFile)(
        'ambas as implementações devem produzir resultados idênticos',
        (list1, list2) => {
            let mergedList = mergeTwoLists(list1, list2);
            let mergedListAlternative = mergeTwoListsAlternative(list1, list2);
            expect(mergedList).toEqual(mergedListAlternative);
        }
    );
});
