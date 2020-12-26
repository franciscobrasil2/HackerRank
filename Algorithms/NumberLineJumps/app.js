const x1 = 0
const v1 = 3

const x2 = 4
const v2 = 2

let isPossible = false

for(let counter = 1; counter <= 10000; counter++) {
    let x1Position = x1 + (v1 * counter)
    let x2Position = x2 + (v2 * counter)
    if(x1Position === x2Position) {
        isPossible = true
        break
    }
}

const result = isPossible === false ? "NO" : "YES"
return result