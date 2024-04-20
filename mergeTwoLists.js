const ListNode = require('./auxiliares/ListNode');

function mergeTwoLists(list1, list2) {
    // Função auxiliar para comparar valores e ordenar os nós
    const compare = (a, b) => a - b;

    // Converte list1 e list2 em arrays de valores
    let arr1 = toArray(list1);
    let arr2 = toArray(list2);

    // Ordena os arrays
    arr1.sort(compare);
    arr2.sort(compare);

    let dummy = new ListNode();
    let current = dummy;

    // Itera sobre os arrays para criar a lista ligada mesclada
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            current.next = new ListNode(arr1[i]);
            i++;
        } else {
            current.next = new ListNode(arr2[j]);
            j++;
        }
        current = current.next;
    }

    // Adiciona o restante dos elementos de arr1 ou arr2
    while (i < arr1.length) {
        current.next = new ListNode(arr1[i]);
        current = current.next;
        i++;
    }
    while (j < arr2.length) {
        current.next = new ListNode(arr2[j]);
        current = current.next;
        j++;
    }

    return dummy.next;
}

// Função auxiliar para converter uma lista ligada em um array de valores
function toArray(head) {
    let array = [];
    let current = head;
    while (current !== null) {
        array.push(current.val);
        current = current.next;
    }
    return array;
}

module.exports = mergeTwoLists;
