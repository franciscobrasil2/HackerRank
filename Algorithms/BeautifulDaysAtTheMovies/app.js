let i = 20, j = 23
const k = 6

function beautifulDays(i, j, k) {
    let count = 0
    for(; i <= j; i++) {
        let x = i.toString()
        let reverse = x.split("").reverse().join('')
        reverse = parseInt(reverse)
        
        if((i - reverse) % k === 0) {
            count++
        }
    }
    return count
}

console.log(beautifulDays(i, j, k));