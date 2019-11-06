/*
1002. Find Common Characters
Easy

466

57

Favorite

Share
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
*/

var commonChars = function(A) {
    var charCount = {};
    var result = [];
    
    var countLetter = function(s, letter) {
        var count = 0;
        for (var i = 0; i < s.length; i ++) {
            if (s[i] === letter) {
                count ++;
            }
        }
        return count;
    }
    for (n = 0; n < A[0].length; n ++) {
        if (!charCount[A[0][n]]) {
            charCount[A[0][n]] = 1;
        } else {
            charCount[A[0][n]] ++;
        }
    }
    for (var j = 0; j < A.length; j ++) {
        for (var key in charCount) {
            if (charCount[key] > countLetter(A[j], key)) {
                charCount[key] = countLetter(A[j], key);
            }
        }
    }
    for (var key in charCount) {
        for (var x = charCount[key]; x > 0; x --) {
            result.push(key);
        }
    }
    return charCount;
};

var x = ["cool","lock","cook"];
var xb = ["bella","label","roller"];
var y = commonChars(x);
var yb = commonChars(xb);
console.log(y)
// console.log(yb)
