function toArray(head) {
    let array = [];
    let current = head;
    while (current !== null) {
        array.push(current.val);
        current = current.next;
    }
    return array;
}

// __mocks__/toArray.js
module.exports = toArray;