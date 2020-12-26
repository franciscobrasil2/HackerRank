const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    let obj = {}

    for (let counter = 1; counter < 101; counter++) {
        let count = 0
        ar.forEach((sock) => {
            if (sock === counter) {
                count++
                obj[sock] = count
            }
        })
    }
    
    Object.keys(obj).forEach((sock) => {
        obj[sock] = (obj[sock] - (obj[sock] % 2)) / 2
    })
    
    let numberOfPair = 0
    Object.keys(obj).forEach((sock) => {
        numberOfPair += obj[sock]
    })
    
    return numberOfPair
}

console.log(sockMerchant(n, ar));
