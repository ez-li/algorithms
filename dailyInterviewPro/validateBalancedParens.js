
/**
Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Note that an empty string is also considered valid.

Example:
Input: "((()))"
Output: True

Input: "[()]{}"
Output: True

Input: "({[)]"
Output: False
 */

const validateParens = (string) => {
    if (string === '') {
        return true;
    }
    const balance = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    const storage = {};
    const chars = string.split('');
    for (var i = 0; i < chars.length; i ++) {
        if (storage[chars[i]]) {
            storage[chars[i]] += 1;
        } else {
            storage[chars[i]] = 1;
        }
    }
    for (var key in storage) {
        if (balance[key]) {
            const pair = balance[key];
            if (storage[key] !== storage[pair]) {
                return false;
            }
        }
    }
    return true;
}

const x = validateParens("((()))"); // true
const y = validateParens("[()]{}"); // true
const z = validateParens("({[)]"); // false

console.log(x,y,z);
