const ListNode = require('./ListNode');
const validateList = require('../validateList');

var mergeTwoListsAlternative = function(list1, list2) {
    let isValidList1 = validateList(list1);
    let isValidList2 = validateList(list2);

    if (!isValidList1.valid || !isValidList2.valid) {
        
        return {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" };
        
        //message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" };

    } else {
        // Verifica se list1 é um array e converte para lista ligada se for
        if (Array.isArray(list1)) {
            list1 = createLinkedListFromArray(list1);
        }
    
        // Verifica se list2 é um array e converte para lista ligada se for
        if (Array.isArray(list2)) {
            list2 = createLinkedListFromArray(list2);
        }
        
    let dummy = new ListNode(); // Crie um nó fictício vazio
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Adicione o restante da lista não vazia
    current.next = list1 !== null ? list1 : list2;

    // Ordena a lista mesclada usando bubble sort
    let sorted = false;
    while (!sorted) {
        sorted = true;
        let prev = dummy;
        let curr = dummy.next;
        let nextNode = curr ? curr.next : null; // Verifique se curr não é nulo

        while (nextNode !== null) {
            if (curr.val > nextNode.val) {
                // Troque os nós
                curr.next = nextNode.next;
                nextNode.next = curr;
                prev.next = nextNode;
                sorted = false;
            }
            prev = curr;
            curr = curr.next;
            nextNode = curr ? curr.next : null; // Verifique se curr não é nulo
        }
    }

    return dummy.next;
    }
};

// Função auxiliar para criar uma lista ligada a partir de um array
function createLinkedListFromArray(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

module.exports = mergeTwoListsAlternative;
