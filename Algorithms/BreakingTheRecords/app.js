const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

let breakMaxScore = 0
let breakMinScore = 0

let maxScore = scores[0]
let minScore = scores[0]

scores.forEach((score, index) => {
    if(score > maxScore) {
        maxScore = score
        breakMaxScore++
    }
    if(score < minScore) {
        minScore = score
        breakMinScore++
    }
})

console.log(breakMaxScore + " " + breakMinScore);



