const ListNode = require('./ListNode');

var mergeTwoListsAlternative = function(list1, list2) {
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
};

module.exports = mergeTwoListsAlternative;
