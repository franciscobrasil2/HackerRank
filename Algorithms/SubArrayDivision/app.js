
const s = [1, 2, 1, 3, 2]
const d = 3
const m = 2

let meetCriteria = 0
let sumArray = []

for (let counter = 0; counter < s.length; counter++) {
    sumArray.push(s[counter])
    if (sumArray.length === m) {
        let sumInput = sumArray.reduce((a,b) => a + b)
        sumInput === d ? meetCriteria++ : null
        counter = counter - (m - 1)
        sumArray = []
    }
} 

console.log(meetCriteria);






