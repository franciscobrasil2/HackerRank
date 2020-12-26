const n = 10, m = 10, s = 2

function saveThePrisoner(n, m, s) {
    if (n === m) {
        return s
    } else if((m % n) + (s - 1) > n) {
        return ((m % n) + (s - 1)) - n
    } else {
        return (m % n) + (s - 1)
    }
}

console.log(saveThePrisoner(n, m, s));









// function saveThePrisoner(n, m, s) {
//     let prisoner = s - 1
//     for (let counter = 0; counter < m; counter++) {
//         prisoner++
//         if (prisoner > n) {
//             prisoner = 1
//         }
//     }
//     return prisoner
// }