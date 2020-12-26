'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = fs.readFileSync('input00.txt');
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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let [aliceScore, bobScore] = [0, 0]
    for (let counter = 0; counter < a.length; counter++) {
        if (a[counter] > b[counter]) {
            aliceScore++
        } else if (a[counter] < b[counter]) {
            bobScore++
        }
    }
    return [aliceScore, bobScore]
}
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));
console.log(compareTriplets(a, b))



