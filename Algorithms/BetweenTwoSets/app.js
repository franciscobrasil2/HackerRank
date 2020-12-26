const a = [2, 4]
const b = [16,32,96]

let aCheck = []
let aFactors = []

for(let counter = 1; counter <= b[0]; counter++) {
    aCheck = []
    for(let index = 0; index < a.length; index++) {
        if(counter % a[index] === 0) {
            aCheck.push(true)
            if(aCheck.length === a.length) {
                aFactors.push(counter)
            }
        }
    }
}

let bFactors = []
let bCheck = []

for(let counter = 0; counter < aFactors.length; counter++) {
    bCheck = []
    for(let index = 0; index < b.length; index++) {
        if(b[index] % aFactors[counter] === 0) {
            bCheck.push(true)
            if(bCheck.length === b.length) {
                bFactors.push(aFactors[counter])
            }
        }
    }
}

console.log(bFactors.length);