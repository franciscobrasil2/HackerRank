const fs = require("fs")

const scores = fs.readFileSync('scores1.txt')
    .toString('utf-8')
    .split(" ")
const alice = fs.readFileSync('alice1.txt')
    .toString('utf-8')
    .split(" ")

function climbingLeaderboard(scores, alice) {
    let resultsAr = alice.map((score) => {
        scores.push(score)
        scores.sort((a, b) => b - a)
        scores.forEach((input, idx) => {
            if (input === scores[idx + 1]) {
                scores.splice((idx + 1), 1)
            }
        })
        return scores.indexOf(score) + 1
    })
    return resultsAr
}

console.log(climbingLeaderboard(scores, alice));



