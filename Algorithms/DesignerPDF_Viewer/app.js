const fs = require("fs")

const h = fs.readFileSync('input.txt')
    .toString('utf-8')
    .split(" ")
    .map((score) => parseInt(score))

const word = "zaba"

function designerPdfViewer(h, word) {
    //creates an object with the alphabet letters and their respective height from array h
    const objH = {}, a = "a", z = "z"
    for (let x = 0, i = a.charCodeAt(0), j = z.charCodeAt(0); i <= j; i++, x++) {
        objH[String.fromCharCode(i)] = h[x]
    }

    const wordAr = word.split("")

    const wordArHeight = wordAr.map((letter) => {
        return objH[letter]
    })

    const maxHeight = Math.max(...wordArHeight)

    return maxHeight * word.length

}

console.log(designerPdfViewer(h, word));

