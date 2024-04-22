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

module.exports = toArray;