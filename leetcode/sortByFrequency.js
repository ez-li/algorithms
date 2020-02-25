/*

Input (stdin)
5
3
1
2
2
4
Expected Output
1
3
4
2
2
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'customSort' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function customSort(arr) {
    // Write your code here
    var counter = {};
    var freq = {};
    arr.forEach((el) => {
        counter[el] = (counter[el] || 0) + 1;
    })
    for (var key in counter) {
        if (freq[counter[key]]) {
            freq[counter[key]].push(key)
        } else {
            freq[counter[key]] = [key];
        }
    }
    for (var key in freq) {

    }
    console.log(freq);
    // freq.sort((x,y) => {
    //     return x.length - y.length
    // })
    // freq.forEach((sub) => {
    //     sub.forEach((el) => {
    //         console.log(el);
    //     })
    // })
    // console.log(freq);

    
    // arr.sort((x,y) => {
    //     return x - y;
    // })
    // arr.sort((x,y) => {
    //     return counter[x] - counter[y];
    // })
    // arr.forEach((el) => {
    //     console.log(el);
    // })
}

function main() {
    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    customSort(arr);
}


