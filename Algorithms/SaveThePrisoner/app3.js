const fs = require("fs")

const input = fs.readFileSync('input.txt')
    .toString('utf-8')
    .split("\n")
    .map((item) => {
        return item.split(" ")
    })
    .map((item) => {
        return item.map((subItem) => {
            return parseInt(subItem)
        })
    })

const answer = fs.readFileSync('answer.txt')
    .toString('utf-8')
    .split("\n")
    .map((item) => {
        return parseInt(item)
    })

input.forEach((item, index) => {
    const n = item[0], m = item[1], s = item[2]

    let result = 0

    if (n === m) {
        if (s === 1) {
            result = m
        } else {
            result = s - 1
        }

    } else if ((m % n) + (s - 1) === 0 && s === 1) {
        result = n
    } else if ((m % n) + (s - 1) > n) {
        result = ((m % n) + (s - 1)) - n
    } else {
        result = ((m % n) + (s - 1))
    }

    if (result !== answer[index]) {
        console.log(index + 1 + " " + item + " " + answer[index] + " " + result);
        console.log((m % n) + (s - 1));
    }
})










