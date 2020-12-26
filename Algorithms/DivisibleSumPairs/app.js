const ar = [1,2,3,4,5,6,7]
const n = ar.length
const k = 5

let meetCriteria = 0

for(let counter = 0; counter < n; counter++) {
    for(let counter2 = 0; counter2 < n; counter2++) {
        if(counter !== counter2) {
            let sum = ar[counter] + ar[counter2]
            sum % k === 0 ? meetCriteria++ : null
        }
    }
}

console.log(meetCriteria / 2);