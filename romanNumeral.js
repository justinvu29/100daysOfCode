function toRoman(num) {
    let roman = ''
    let numString = String(num)

    const romanDigit = {
        1: 'I', 
        5: 'V', 
        10: 'X', 
        50: 'L', 
        100: 'C', 
        500: 'D'
    }

    if (numString.length === 4) {
        return 'M'
    }

    if (numString.length === 3) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[500]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[100]
        }
        numString = numString.slice(-2)
    }

    if (numString.length === 2) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[50]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[10]
        }
        numString = numString.slice(-1)
    }

    if (numString.length === 1) {
        let current = parseInt(numString[0])
        if (current >= 5) {
            roman += romanDigit[5]
            current -= 5
        }
        for (let i = current; i > 0; i--) {
            roman += romanDigit[1]
        }
    }

    return roman
}

console.log(toRoman(575))