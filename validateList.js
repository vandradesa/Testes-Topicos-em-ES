const ListNode = require('./auxiliares/ListNode');

function validateList(list) {
    // Verifica se a lista é nula ou indefinida
    /* if (!list) {
        return { valid: false, message: 'A lista não pode ser nula ou indefinida.' };
    } */

    let current = list;
    let count = 0;

    while (current !== null) {
       
        // Verifica se o valor é um número inteiro entre -100 e 100
        let val = current.val;
        if (!Number.isInteger(val) || val < -100 || val > 100) {
            return { valid: false, message: `O valor '${val}' não é um número inteiro entre -100 e 100.` };
        }

        current = current.next;
        count++;

        // Verifica se a lista tem mais de 50 elementos
        if (count > 50) {
            return { valid: false, message: 'A lista não pode ter mais de 50 elementos.' };
        }
    }

    return { valid: true, message: 'A lista foi validada com sucesso.' };
}



module.exports = validateList;