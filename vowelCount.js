function vowels(str) {
    var vowels = 0
    for (var i = 0; i < str.length; i++) {
      switch (str[i].toLowerCase()) {
        case 'a':
          vowels++
          break
        case 'e':
          vowels++
          break
        case 'i':
          vowels++
          break
        case 'o':
          vowels++
          break
        case 'u':
          vowels++
      }
    }
    return vowels
  }
  console.log(vowels(apple))