// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.
// Each block is represented by a *.
// For example, a tower of 3 floors looks like this (note the spacing):

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]

const buildTower = n => {
    let tower = []

    for(let i = 0; i < n; i++){
        tower.push(
            ' '.repeat(n - i - 1)
            + '*'.repeat((i * 2) + 1)
            + ' '.repeat(n - i - 1)
        ) 
    }
    return tower
}


console.log(buildTower(4))
console.log(buildTower(7))
console.log(buildTower(10))