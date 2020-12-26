const arr = [-4, 3, -9, 0, 4, 1]

const positiveArr = []
const negativeArr = []
const zeroArr = []

arr.forEach((element) => {
    if(element > 0) {
        positiveArr.push(element)
    } else if (element < 0) {
        negativeArr.push(element)
    } else {
        zeroArr.push(element)
    }
})

const positiveRatio = positiveArr.length / arr.length
const negativeRatio = negativeArr.length / arr.length
const zeroRatio = zeroArr.length / arr.length

console.log(positiveRatio.toFixed(6))
console.log(negativeRatio.toFixed(6))
console.log(zeroRatio.toFixed(6))