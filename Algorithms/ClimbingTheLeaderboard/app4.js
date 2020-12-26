const { time } = require("console")
const fs = require("fs")

const scores = fs.readFileSync('scores2.txt')
    .toString('utf-8')
    .split(" ")
    .map((score) => parseInt(score))

const alice = fs.readFileSync('alice2.txt')
    .toString('utf-8')
    .split(" ")
    .map((score) => parseInt(score))

console.time('climbingLeaderboard')

function climbingLeaderboard(scores, alice) {

    let uniqueScores = [...new Set(scores)]

    let resultsAr = []

    let i = uniqueScores.length - 1

   alice.forEach((item) => {
        while (i >= -1) {
            if (item < uniqueScores[i]) {
                resultsAr.push(i + 2)
                break
            } else if (item === uniqueScores[i]) {
                resultsAr.push(i + 1)
                break
            } else if (i < 0) {
                resultsAr.push(1)    
                break
            } else {
                i--
            }
            
        }
    })
    return resultsAr
}

console.log(climbingLeaderboard(scores, alice));

console.timeEnd('climbingLeaderboard')


