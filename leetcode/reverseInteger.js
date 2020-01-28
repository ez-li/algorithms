/*
Given a 32-bit signed integer, reverse digits of an integer.
*/

var reverse = function(x) {
    var sign = x < 0 ? -1 : 1;
    var str = Math.abs(x).toString();
    var output = '';
    for (let i = str.length - 1; i >= 0; i -=1 ) {
        output += str[i];
    }
    return Number(output)*sign;
};

var a = reverse(1);
console.log(a)