const a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

function pickingNumbers(a) {
    a.sort((a,b) => b-a)
    let pickingNumbersAr = []
    let positiveArs = []

    for (let i = 0; i < a.length; i++) {
        positiveArs = []
        positiveArs.push(a[i])
        for (let n = 0; n < a.length; n++) {
            if (i !== n) {
                if ((a[i] - a[n]) === 1 || (a[i] - a[n]) === 0) {
                    positiveArs.push(a[n])
                }
            }
            if (n === (a.length - 1)) {
                pickingNumbersAr.push(positiveArs)
            }
        }
    }

    let lenghArs = pickingNumbersAr.map((ar) => {
        return ar.length
    })

    return Math.max(...lenghArs)

}

console.log(pickingNumbers(a));