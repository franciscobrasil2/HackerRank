const n = 5, m = 7, s = 1

function saveThePrisoner(n, m, s) {
    for (let counter = 1; counter < m; counter++) {
        s++
        if (s > n) {
            s = 1
        }
    }
    return s
}

console.log(saveThePrisoner(n, m, s));