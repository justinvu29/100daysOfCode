// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer 
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.


const newSquare = num => {
    if (Number.isInteger(Math.sqrt(num))) {
        return Math.pow((Math.sqrt(num) + 1), 2)
    } else {
        return -1
    }
}
  
console.log(newSquare(9))

console.log('Hello World')