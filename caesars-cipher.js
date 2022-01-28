function rot13(str) {
  let decodedString = ""
  let decodedArray = []

 const cipher = {
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
      N: "A",
      O: "B",
      P: "C",
      Q: "D",
      R: "E",
      S: "F",
      T: "G",
      U: "H",
      V: "I",
      W: "J",
      X: "K",
      Y: "L",
      Z: "M"
}

    let stringToArray = str.split("")

    for (let i = 0; i < stringToArray.length; i++) {
      let regex = /[^A-Za-z0-9_]/
      if (regex.test(stringToArray[i])) {
        decodedArray.push(stringToArray[i])
      } else {
        console.log(cipher[stringToArray[i]])
        let decodedLetter = cipher[stringToArray[i]]
        decodedArray.push(decodedLetter)
      }
    }
    decodedString = decodedArray.join("")
    return decodedString

}

rot13("SERR PBQR PNZC");