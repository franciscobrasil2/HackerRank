let a = [1, 2, 3]
const k = 2, queries = [0, 1, 2]

function circularArrayRotation(a, k, queries) {
    for (let i = 0; i < k; i++) {
        let x = a.splice(a.length - 1, 1)
        a.unshift(...x)
    }
    
    const result = queries.map(element => {
        return a[element]
    });
    return result
}

console.log(circularArrayRotation(a, k, queries));


