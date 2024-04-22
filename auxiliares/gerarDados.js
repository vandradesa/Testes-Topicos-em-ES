const ListNode = require('./ListNode');

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

    for (let i = 0; i < 1000; i++) {
        let length = Math.floor(Math.random() * 51); // Comprimento aleatório entre 0 e 50
        let list1 = generateRandomLinkedList(length, -100, 100); // Valores aleatórios entre -100 e 100
        let list2 = generateRandomLinkedList(length, -100, 100); // Valores aleatórios entre -100 e 100
        testData.push([list1, list2]);
    }

    return testData;
} 


module.exports = generateTestData;


/* 
function generateTestDataArrays() {
    let testData = [];

    for (let i = 0; i < 1000; i++) {
        let length = Math.floor(Math.random() * 51); // Comprimento aleatório entre 0 e 50
        let arr1 = generateRandomArray(length, -100, 100); // Valores aleatórios entre -100 e 100
        let arr2 = generateRandomArray(length, -100, 100); // Valores aleatórios entre -100 e 100
        testData.push([arr1, arr2]);
    }

    return testData;
}

// Função auxiliar para gerar um array aleatório
function generateRandomArray(length, minVal, maxVal) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
    }

    return arr;
} */