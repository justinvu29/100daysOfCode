function palindrome(str) {
    const re = /[\W_]/g
    const low = str.toLowerCase().replace(re, '')
    const rev = lowRegSgtr.split('').reverse().join('')
    return low === rev
  }

