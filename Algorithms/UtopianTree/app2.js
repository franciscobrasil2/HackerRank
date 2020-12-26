const n = 0

function utopianTree(n) {
    let height = 1
    if (n === 0) {
        null
    } else {
        for (let j = 1; j <= n; j++) {
            if (j % 2 === 0) {
                height++
            } else {
                height = height * 2
            }
        }
    }
    return height
}

console.log(utopianTree(n));