/*
INPUT
2
{{
{{()
OUTPUT
NO
NO
INPUT
3
{[()]}
{[(])}
{{[[(())]]}}
OUTPUT
YES
NO
YES
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the braces function below.

function isValid(s) {
    var counter = {};
    var parenMap = {'(': ')',
                 '[': ']',
                 '{': '}'};
    var parenStack =[];

    for(var i=0; i < s.length; i++) {
        if (s[i] in parenMap) {
            parenStack.push(s[i]);
        } else if (Object.values(parenMap).indexOf(s[i]) > -1) {
            if (parenMap[parenStack.pop()] !== s[i]) return false;
        }
    }
    if (parenStack.length > 0) return false;
    return true;
}

function braces(values) {
    var output = [];
    values.forEach((str) => {
        if (isValid(str)) {
            output.push('YES');
        } else {
            output.push('NO');
        }
    });
    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const valuesCount = parseInt(readLine(), 10);

    let values = [];

    for (let i = 0; i < valuesCount; i++) {
        const valuesItem = readLine();
        values.push(valuesItem);
    }

    let res = braces(values);

    ws.write(res.join("\n") + "\n");

    ws.end();
}
