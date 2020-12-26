const candles = [3, 2, 1, 3]

const maxHeight = Math.max(...candles)

let maxHeightCount = 0
candles.forEach((input) => {
    input === maxHeight ? maxHeightCount++ : null
})

console.log(maxHeightCount);

