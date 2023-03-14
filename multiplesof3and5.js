function threeAndFive(limit) {
    let sum = 0
    for (let i = 0; i < limit; i++) {
      if (!(i % 3) || !(i % 5)) {
        sum += i
      }
    }
    return sum
  }

  
  