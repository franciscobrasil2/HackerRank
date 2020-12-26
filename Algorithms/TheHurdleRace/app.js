const k = 4
const height = [1,6,3,5,2]

function hurdleRace(k, height) {
   const maxHurdle = Math.max(...height)
   const result = maxHurdle > k ? maxHurdle - k : 0
   return result
}

console.log(hurdleRace(k, height));