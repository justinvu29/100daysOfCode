function translate(str) {
    const strArr = str.split('')
    const vowel = /[aeiou]/
    if (vowel.test(strArr[0])) {
      return str + 'way'
    }
    while (true) {
      if (!vowel.test(strArr[0])) {
        strArr.push(strArr.splice(0, 1))
      } else if (vowel.test(strArr[0])) {
        break
      }
    }
    return strArr.join('') + 'ay'
  }
