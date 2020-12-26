const path = "DUDUDUDU"

function countingValleys(steps, path) {
    // Write your code here
    console.log(path);
    let positive = true;
    let current = 0;
    let count = 0;
    for (const p of path) {
        if (p === 'D') {
            current--;
            positive = current < 0 ? false : true; 
        }
        if (p === 'U') {
            current++;
            if (current === 0 && !positive) {
                count++;
                positive = true;
            }
        }
        
    }
    return count;

}

console.log(countingValleys(0, path));