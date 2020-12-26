const p = [4, 3, 5, 1, 2]


function permutationEquation(p) {
    let result = []
    for (let i = 1; i < p.length + 1; i++) {
        result.push(p.indexOf(p.indexOf(i) + 1) + 1);
    }
    return result
}


// 1 = p(3) = p(p(4)) = 4

// 2 = p(2) = p(p(2)) = 2

// 3 = p(4) = p(p(5)) = 5

// 
console.log(permutationEquation(p));


