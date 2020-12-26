let s = "12:45:54PM"

if (s.includes('PM')) {
    if((parseInt(s.charAt(0) + s.charAt(1))) === 12) {
        s = s.replace("PM", "")
    } else {
        s = s.replace("PM", "")
        const pmTime = parseInt(s.charAt(0) + s.charAt(1)) + 12; 
        s = s.replace(s.charAt(0) + s.charAt(1), pmTime)
    }
    
} else {
    if((parseInt(s.charAt(0) + s.charAt(1))) === 12) {
        s = s.replace("AM", "")
        s = s.replace(s.charAt(0) + s.charAt(1), "00")
    } else {
        s = s.replace("AM", "")
    } 
}

console.log(s);

// const pmTime = parseInt(s.charAt(0) + s.charAt(1));

// console.log(pmTime);


