
const n = 2


function viralAdvertising(n) {
    let likesPerDay = 0, recipients = 0, totalLikes = 0

    for (let counter = 0; counter < n; counter++) {
        if (counter === 0) {
            likesPerDay = 2
            totalLikes = likesPerDay
        } else {
            recipients = likesPerDay * 3
            likesPerDay = Math.floor(recipients / 2)
            totalLikes += likesPerDay
        }
    }
    return totalLikes
}

console.log(viralAdvertising(n));