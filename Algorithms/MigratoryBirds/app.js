const arrInput = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

function migratoryBirds(arr) {
    let arrayCount = []

    for (let counter = 1; counter < 6; counter++) {
        let count = 0
        arr.forEach((input, index) => {
            if (counter === input) {
                count++
            }
            if ((index + 1) === arr.length) {
                arrayCount.push(count)
            }
        })
    }

    const indexOfMax = arrayCount.indexOf(Math.max(...arrayCount)) + 1
    return indexOfMax

}

console.log(migratoryBirds(arrInput));