/*
INPUT
4
2
2
2
2
OUTPUT
0 1
2 3

INPUT
3
1
1
1
OUTPUT
0
1
2

INPUT
5
2
1
1
2
1
OUTPUT
0 3
1
2
4

n active users, numbered 0 to n-1
friend other users to create groups of friends

same group if they are friends or friend of friends

a group of size k is valid if it contain the k smallest id numbers possible
counts = [3,3,3,3,3,1,3], grouping [[0,1,2],[3,4,6],[5]] is valid but not
[0,1,4] etc

print the information for each valid group in format smallest user ID  to largest user ID, each row is a different group
0 1 2
3 4 6
5
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
 * Complete the 'socialGraphs' function below.
 *
 * The function accepts INTEGER_ARRAY counts as parameter.
 */

function socialGraphs(counts) {
    // Write your code here
    var groupMap = {};
    var groups = [];
    counts.forEach((val, index) => {
        if (!groupMap[val]) {
            groupMap[val] = [index];
        } else {
            groupMap[val].push(index);
        }
    })
    for (var size in groupMap) {
        var group = [];
        for (var i = 0; i < size.length; i += 1) {
            if (group.length >= Number(size)) {
                groups.push(group);
                var group = [];
            }
            group.push(groupMap[size]);
        }
    }
    console.log(groupMap, groups);
    return groups.join('/n');
}

function main() {
    const countsCount = parseInt(readLine().trim(), 10);

    let counts = [];

    for (let i = 0; i < countsCount; i++) {
        const countsItem = parseInt(readLine().trim(), 10);
        counts.push(countsItem);
    }

    socialGraphs(counts);
}
