const n = 8
const p = 8

function pageCount(n, p) {
    if (n / 2 >= p) {
        if (p === 1) {
            return 0
        } else {
            return (p - (p % 2)) / 2
        }
    } else {
        if (n % 2 === 0) {
            if (p === n) {
                return 0
            } else if (p === n - 1) {
                return 1
            } else {
                return Math.round((n - p) / 2)
            }
        } else {
            if (p === n || p === n - 1) {
                return 0
            } else {
                return Math.floor((n - p) / 2)
            }
        }
    }
}

console.log(pageCount(n, p));