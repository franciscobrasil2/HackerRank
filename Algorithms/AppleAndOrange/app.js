//Sam's house area
const s = 7
const t = 11

//position of three a and b
const a = 5
const b = 15

//number os apples and oranges
const m = 3
const n = 2

//distances that each apple falls from point a
const apples = [-2, 2, 1]
//distances that each orange falls from point b
const oranges = [5, -6]

//Answer:
//1
//1 

//Solution
let applesPosition = apples.map((apple) => {
    return apple + a
})

let appleCounter = 0
applesPosition.forEach((apple) => {
    if(apple >= s && apple <= t) {
        appleCounter++
    }
})
console.log(appleCounter);

let orangesPosition = oranges.map((orange) => {
    return orange + b
})

let orangeCounter = 0
orangesPosition.forEach((orange) => {
    if(orange >= s && orange <= t) {
        orangeCounter++
    }
})

console.log(orangeCounter);