const ListNode = require('./ListNode');

var mergeTwoLists = function(list1, list2) {
    // Função auxiliar para comparar valores e ordenar os nós
    const compare = (a, b) => a.val - b.val;

    // Converte list1 e list2 em arrays
    list1 = toArray(list1);
    list2 = toArray(list2);

    // Ordena as listas
    list1.sort(compare);
    list2.sort(compare);

    let dummy = new ListNode();
    let current = dummy;

    while (list1.length > 0 && list2.length > 0) {
        if (list1[0].val < list2[0].val) {
            current.next = list1.shift();
        } else {
            current.next = list2.shift();
        }
        current = current.next;
    }

    // Adiciona o restante da lista não vazia
    current.next = list1.length > 0 ? list1[0] : list2[0];

    return dummy.next;
};

// Função auxiliar para converter uma lista ligada em um array
function toArray(head) {
    let array = [];
    let current = head;
    while (current !== null) {
        array.push(current);
        current = current.next;
    }
    return array;
}



module.exports = mergeTwoLists;
