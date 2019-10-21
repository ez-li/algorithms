/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var addTwoNumbers = function(l1, l2) {
    var storage = {};
    var result = 0;
    var digitPlace = 0;
    var addNode = function(node) {
        if (node.next) {
            addNode(node.next);
        }
        if (!storage[digitPlace]) {
            storage[digitPlace] = [];
        }
        storage[digitPlace].push(node.value);
        digitPlace ++;
    }
    digitPlace = 0;
    addNode(l1);
    digitPlace = 0;
    addNode(l2);
    for (var key in storage) {
        result += Math.pow(10, key)*(storage[key][0] + storage[key][1]);
    }
    
    return result
};