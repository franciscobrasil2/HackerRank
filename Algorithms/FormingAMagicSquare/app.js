const s = [
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6]
]

function formingMagicSquare(s) {

//All the possible magic squares in this scenario
const possibilities = [
    [8,3,4,1,5,9,6,7,2],
    [8,1,6,3,5,7,4,9,2],
    [6,1,8,7,5,3,2,9,4],
    [4,3,8,9,5,1,2,7,6],
    [2,7,6,9,5,1,4,3,8],
    [2,9,4,7,5,3,6,1,8],
    [4,9,2,3,5,7,8,1,6],
    [6,7,2,1,5,9,8,3,4],
]

//transform the s array of arrays into a single array
let spreadAr = []
s.forEach((input) => {
    input.forEach((item) => {
        spreadAr.push(item)
    })
})

//create an array of the difference between the spreadAr and all the possibilities array
let someAr = []
let resultAr = []
for(let i = 0; i < possibilities.length; i++) {
    someAr = []
    for(let n = 0; n < spreadAr.length; n++) {
        let some = possibilities[i][n] - spreadAr[n]
        someAr.push(Math.abs(some))
        if(spreadAr.length === (n + 1)) {
            resultAr.push(someAr)    
        }
    }
}

//sum values in each array of difference and get the result with the lowest diffence
let finalResultAr = resultAr.map((ar) => {
    return ar.reduce((a,b) => a+b)
})
return Math.min(...finalResultAr)

}

console.log(formingMagicSquare(s));