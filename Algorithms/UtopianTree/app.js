const n = [0, 1, 4]

function utopianTree(n) {
    const result = n.map((treeHeight) => {
        if(treeHeight === 0) {
            return 1
            
        } else {
            let height = 1
            for(let j = 1; j <= treeHeight; j++) {
                if(j % 2 === 0) {
                    height++
                } else {
                    height = height * 2
                }
            }
            return height
        }
    })
    return result
}

console.log(utopianTree(n));