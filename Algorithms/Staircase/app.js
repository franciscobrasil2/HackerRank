const n = 7

for (let counter = 1; counter <= n; counter++) {
    let stairLine = ""
    for(let counter2 = 0; counter2 < n - counter; counter2++) {
        stairLine += " "
    }
    for(let counter3 = 0; counter3 < counter; counter3++) {
        stairLine += "#"
    }
    console.log(stairLine);
}