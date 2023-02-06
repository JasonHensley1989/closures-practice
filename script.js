// A closure is essentially a function that executes a function

//  so with one basic counter i can count using a global variable
// as shown below, the function runs once and then stops after iterating
// the global count

let globalCount = 4;

const testCounter = () => {
    let localCount = 0;
    return localCount++
}


console.log(testCounter())
console.log(testCounter())
console.log(testCounter())
console.log(testCounter())
console.log(testCounter())

// The shortfall here is that if I wanted 3 counters incrementing
// // const makeCounter = () => {
// //     let count = 0;
// //     return () => {
// //         return count++;
// //     }
// // }


// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())