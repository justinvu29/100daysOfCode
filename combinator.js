// Write a function called combinator that is given two arrays as arguments.
// The first array is an array of first names, and the second array is an
// array of last names. Have the function return a new array combining
// the first names and the last names.

// combinator([‘Jason', ‘Dan’, ‘Cahlan’], [‘Turner’, ‘Kesler’, ‘Sharp’]); →
// [‘Jason Turner’, ‘Dan Kesler’, ‘Cahlan Sharp’]

let arrFirst = [`Justin`, `Harry`, `George`, `Auntie`]
let arrLast = [`Vu`, `Smith`, `Clooney`, `Anne's`]

const combinator = (arr1, arr2) => {
    let combinedArr = []
    for(let i=0; i < arr1.length; i++){
        combinedArr.push(arr1[i] + ' ' + arr2[i])
    }
    return combinedArr
}

console.log(combinator(arrFirst, arrLast))()
