const k = 3
const a = [-1, -1, 4, 2,-1,-1,-1]

//cancel class if fewer than some number of students are present when class starts

// on time <= 0

// arrived late > 0

// determine if the class is cancelled: It must return YES if class is cancelled, or NO otherwise.

function angryProfessor(k, a) {
    //array of present students
    let lateAr = a.map((item) => {
        if(item <= 0) {
            return 1
        } else {
            return 0
        }
    })
    
    
    //number of present students
    let result = lateAr.reduce((a,b) => a+b)
    console.log(lateAr);
    console.log(result);
    
    
    return result < k ?  "YES" : "NO"

}

console.log(angryProfessor(k, a));