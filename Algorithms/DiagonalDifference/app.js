const arr = [[11,2,4], [4,5,6], [10,8,-12]]

function diagonalDifference(arr) {
    let diagonalSum1 = 0
    for (let counter1 = 0, counter2 = 0; counter1 < arr.length; counter1++, counter2++)       {
        diagonalSum1 = diagonalSum1 + arr[counter1][counter2]
    }
    let diagonalSum2 = 0
    for (let counter1 = 0, counter2 = arr.length - 1; counter1 < arr.length; counter1++, counter2--)       {
        diagonalSum2 = diagonalSum2 + arr[counter1][counter2]
    }
    return Math.abs(diagonalSum1 - diagonalSum2)
}

const result = diagonalDifference(arr)

console.log(result);