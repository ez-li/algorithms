/*

Reverse and Add

Problem: choose a number, reverse its digits and add it to the original.
If the sum is not a palindrome (which means, it is not the same number from left to right and right to left), repeat this procedure. eg.

195 (initial number) + 591 (reverse of initial number) = 786

786 + 687 = 1473

1473 + 3741 = 5214

5214 + 4125 = 9339 (palindrome)

In this particular case the palindrome 9339 appeared after the 4th addition. This method leads to palindromes in a few step for almost all of the integers.

Write a function called reverseAndAdd that will take an integer as an input and return a string formatted as number of additions + palindrome number found. In the above example, reverseAndAdd(195) should produce the string "4 9339", with "4" being the number of tries and "9339" the palindrome number.

*/

function reverseDigits(number) {
  // returns reverse of number
  // convert into string, and reverse
  var string = number.toString();
  var rString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    rString += string[i];
  }
  return parseInt(rString);
};

// var testReverse = '1473';
// var a = reverseDigits(testReverse);
// console.log(typeof a, a);

function isPalindrome(number) {
  // checks if number is palindrone
  // returns true / false
  var string = number.toString();
  if (string === reverseDigits(string).toString()) {
    return true;
  }
  return false;
};

// var testPalindrome = '9339';
// var b = isPalindrome(testPalindrome);
// console.log(b);

function reverseAndAdd (number) {
  // recursively call until isPalindrome is true
  // what if never hit palindrome?
  // returns string '#additions palindrome'
  var count = 0;
  var current = number;
  while (!isPalindrome(current)) {
    current += reverseDigits(current);
    count += 1;
  }
  return '' + count + ' ' + current;
}

// var testFunction = reverseAndAdd(195);
// console.log(testFunction);

console.log(reverseAndAdd(195) === '4 9339');
console.log(reverseAndAdd(49023));

