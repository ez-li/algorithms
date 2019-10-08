// Fizzbuzz
function fizzBuzz(n) {
    var counter = 1;
    var result = [];
    while (counter <= n) {
        var string = '';
        if (counter % 3 === 0) {
            string += 'Fizz';
        } 
        if (counter % 5 === 0) {
            string += 'Buzz';
        }
        if (string.length === 0) {
            string += counter
        }
        result.push(string);
        counter ++;
    }
    return result;
}


// Sum Digits
function addTwoDigits(n) {
    var tens = Math.floor(n / 10);
    var ones = n - tens * 10;
    return tens + ones;
}

// Find median in array
function arrayMedian(sequence) {
    var sorted = sequence.sort((a,b) => {
        return a - b;
    });
    return sorted.length % 2 === 0 ? 
        (sorted[Math.floor(sorted.length/2) - 1] + sorted[Math.ceil(sorted.length/2)])/2 :
        sorted[Math.floor(sorted.length/2)];
}


// Replace characters in string with next character in alphabet
function alphabeticShift(inputString) {
    var alphaNext = {
        'a': 'b',
        'b': 'c',
        'c': 'd',
        'd': 'e',
        'e': 'f',
        'f': 'g',
        'g': 'h',
        'h': 'i',
        'i': 'j',
        'j': 'k',
        'k': 'l',
        'l': 'm',
        'm': 'n',
        'n': 'o',
        'o': 'p',
        'p': 'q',
        'q': 'r',
        'r': 's',
        's': 't',
        't': 'u',
        'u': 'v',
        'v': 'w',
        'w': 'x',
        'x': 'y',
        'y': 'z',
        'z': 'a'
    }
    var result = '';
    for (var i = 0; i < inputString.length; i++) {
        result += alphaNext[inputString[i]];
    }
    return result;
}

// Return if valid time
function validTime(time) {
    var timeBlocks = time.split(':');
    if (timeBlocks.length > 2) {
        return false;
    }
    if (timeBlocks[0] > 23) {
        return false;
    }
    if (timeBlocks[1] > 59) {
        return false;
    }
    if (timeBlocks[0] < 0 || timeBlocks[1] < 0) {
        return false;
    }
    if (timeBlocks[0].length !== 2 || timeBlocks[1].length !== 2) {
        return false;
    }
    return true;
}

// find digit sum difference of even and odd digits
function digitSumsDifference(n) {
    var string = n.toString();
    var digits = string.split('');
    var evens = 0;
    var odds = 0;
    for (var i = 0; i < digits.length; i ++) {
        if (digits[i] % 2 === 0) {
            evens += Number(digits[i]);
        } else {
            odds += Number(digits[i]);
        }
    }
    return evens - odds;
}

// count pairs that sum to k given array
function countPairsWithSum(k, a) {
    var sumsToK = {};
    var count = 0;
    for (var i = 0; i < a.length; i ++) {
        var match = k - a[i];
        if (sumsToK[match] === a[i]) {
            count ++;
            sumsToK[match] = '';
        } 
        if (!sumsToK[a[i]]) {
            sumsToK[a[i]] = match;
        }
    }
    return count;
}


// is list a palindrome
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var list = {};
    var counter = 0;
    var listRecurse = function(node, currIndex, mirrorIndex) {
        list[currIndex] = node.value;
        if (list[mirrorIndex] !== node.value) {
            return false;
        }
        if (node.next !== null) {
            return listRecurse(node.next, currIndex + 1, currIndex - );
        }
    }
    return listRecurse(l.value, 0, 0)
}

// valid parens
function validParenthesesSequence(s) {
    var left = 0;
    var right = 0;
    for (var i = 0; i < s.length; i ++) {
        if (s[i] === '(') {
            left ++;
        }
        if (s[i] === ')') {
            right ++;
        }
        if (right > left) {
            return false;
        }
    }
    return left === right
}

// find number of equidistant group of 3 
function equidistantTriples(coordinates) {
    var storage = [];
    var count = 0;
    var makePair = function(index) {
        for (var j = index + 1; j < coordinates.length; j ++) {
            var pair = [coordinates[index], coordinates[j]];
            var diff = coordinates[j] - coordinates[index];
            storage.push([diff,pair]);
        }
    }
    for (var i = 0; i < coordinates.length; i ++) {
        makePair(i);
    }
    for (var x = 0; x < coordinates.length; x ++) {
        for (var y = 0; y < storage.length; y ++) {
            if (coordinates[x] > storage[y][1][1]) {
                var diff = coordinates[x] - storage[y][1][1];
                if (diff === storage[y][0]) {
                    count ++;
                }
            }
        }
    }
    return count;
}


