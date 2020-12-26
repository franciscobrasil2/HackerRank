const fs = require('fs')

const steps = 1_000_000
const path = fs.readFileSync('input.txt')
    .toString('utf-8')

//answer: 30 valleys

function countingValleys(steps, path) {
    let currLevel = 0;
    let valleys = 0;
    
    path = path.split('');
    for (let i = 0; i < steps; i++) {
        //update the current level
        if (path[i] === 'U') {
            currLevel += 1;
            if (currLevel === 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        }
    }
    return valleys;
}

console.log(countingValleys(steps, path));