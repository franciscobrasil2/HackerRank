const keyboards = [40, 50, 60]
const drives = [5, 8, 12]
const b = 60

function getMoneySpent(keyboards, drives, b) {
    let someArray = []

    keyboards.forEach((keyboard) => {
        drives.forEach((drive) => {
            let some = keyboard + drive
            someArray.push(some)
        })
    })

    someArray = someArray.sort((a, b) => b - a)

    for (let counter = 0; counter < someArray.length; counter++) {
        if (someArray[counter] <= b) {
            return someArray[counter]
        }
        if (someArray.length === (counter + 1)) {
            return "-1"
        }
    }
}

console.log(getMoneySpent(keyboards, drives, b))