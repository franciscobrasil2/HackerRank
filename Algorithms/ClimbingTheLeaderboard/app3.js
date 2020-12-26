const { time } = require("console")
const fs = require("fs")

const scores = fs.readFileSync('scores1.txt')
    .toString('utf-8')
    .split(" ")
    .map((score) => parseInt(score))

const alice = fs.readFileSync('alice1.txt')
    .toString('utf-8')
    .split(" ")
    .map((score) => parseInt(score))



console.time('climbingLeaderboard')

function climbingLeaderboard(scores, alice) {
    let resultsAr = []

    scores.sort((a, b) => b - a)

    let uniqueScores = [...new Set(scores)]

    for (let i = 0; i < alice.length; i++) {
        if (uniqueScores.indexOf(alice[i]) === -1) {
            uniqueScores.push(alice[i])
            uniqueScores.sort((a, b) => b - a)
        }
        resultsAr.push(uniqueScores.indexOf(alice[i]) + 1)
    }
    return resultsAr
}


console.log(climbingLeaderboard(scores, alice));

console.timeEnd('climbingLeaderboard')
