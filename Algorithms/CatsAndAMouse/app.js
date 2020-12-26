const x = 2
const y = 5
const z = 4


function catAndMouse(x, y, z) {
    if (Math.abs(x - z) < Math.abs(y - z)) {
        return "Cat A"
    } else if (Math.abs(x - z) > Math.abs(y - z)) {
        return "Cat B"
    } else {
        return "Mouse C"
    }
}

console.log(catAndMouse(x, y, z));
