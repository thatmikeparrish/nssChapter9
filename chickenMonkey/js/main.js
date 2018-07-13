
const numbers = 101

for(let i=1; i < numbers; i++) {
    const currentNumber = i
    
    if (currentNumber % 5 && currentNumber % 7 === 0) {
        console.log("chickenMonkey")
    } else if (currentNumber % 5 === 0) {
        console.log("chicken")
    } else if (currentNumber % 7 === 0) {
        console.log("monkey")
    } else console.log(currentNumber)

}