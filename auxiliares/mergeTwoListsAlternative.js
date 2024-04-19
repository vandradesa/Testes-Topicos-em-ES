const ListNode = require('./ListNode');

var mergeTwoListsAlternative = function(list1, list2) {
    let dummy = new ListNode();
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

    // Adiciona o restante da lista não vazia
    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
};

module.exports = mergeTwoListsAlternative;
