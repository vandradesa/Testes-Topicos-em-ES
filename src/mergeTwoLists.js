const ListNode = require('./ListNode');
const toArray = require('./toArray');
const validateList = require('./validateList');

function mergeTwoLists(list1, list2) {

     /*   // Verifica se list1 é um array e converte para lista ligada se for
      if (Array.isArray(list1)) {
          list1 = createLinkedListFromArray(list1);
      }
  
      // Verifica se list2 é um array e converte para lista ligada se for
      if (Array.isArray(list2)) {
          list2 = createLinkedListFromArray(list2);
      } */
       
    // Função auxiliar para comparar valores e ordenar os nós

    let isValidList1 = validateList(list1);
    let isValidList2 = validateList(list2);

    if (!isValidList1.valid || !isValidList2.valid) {
        
        return {valid:false,message: "Entradas inválidas. Insira listas com no máximo 50 elementos com números inteiros entre -100 e 100" };

    } else {
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
}



/* // Função auxiliar para criar uma lista ligada a partir de um array
function createLinkedListFromArray(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
} */



module.exports = mergeTwoLists;
