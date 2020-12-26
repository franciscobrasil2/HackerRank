const k = 1
const bill = [3, 10, 2, 9]
const b = 7

function bonAppetit(bill, k, b) {
    let annaBill = 0
    bill.forEach((input, index) => {
        if (index !== k) {
            annaBill += input
        }
        if ((index + 1) === bill.length) {
            annaBill = annaBill / 2
        }
    })

    if (annaBill === b) {
        return "Bon Appetit"
    } else {
        return b - annaBill
    }
}

console.log(bonAppetit(bill, k, b));