const a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

function pickingNumbers(a) {
    let pickingNumbersAr = []
    let positiveArs = []
    let negativeArs = []

    for (let i = 0; i < a.length; i++) {
        positiveArs = []
        negativeArs = []
        positiveArs.push(a[i])
        negativeArs.push(a[i])
        for (let n = 0; n < a.length; n++) {
            if (i !== n) {
                if ((a[i] - a[n]) === 1 || (a[i] - a[n]) === 0) {
                    positiveArs.push(a[n])
                }
                if ((a[i] - a[n]) === -1 || (a[i] - a[n]) === 0) {
                    negativeArs.push(a[n])
                }
            }
            if (n === (a.length - 1)) {
                pickingNumbersAr.push(positiveArs)
                pickingNumbersAr.push(negativeArs)
            }
        }
    }

    let lenghArs = pickingNumbersAr.map((ar) => {
        return ar.length
    })

    return Math.max(...lenghArs)

}

console.log(pickingNumbers(a));

// if I order the a array I would only need one subAr