const arr1 = [2,3,4]
const arr2 = [1,5,6]


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

const result = compareTriplets(arr1, arr2)

console.log(result);
// console.log(result.join(' ') + '\n');
