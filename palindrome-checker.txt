function palindrome(str) {
  // Filter string
  // let testString = "five|\_/|four"
  let lowerCaseString = str.toLowerCase()
  let regex = /[^A-Za-z0-9]/gi
  let filteredString = lowerCaseString.replace(regex, "")
  console.log(filteredString)

  // reverse the string
  let stringAsArray = filteredString.split("")
  let reversedArray = stringAsArray.reverse()
  let reversedString = reversedArray.join()
  let finalString = reversedString.replace(regex, "")
  console.log(finalString)

  if(filteredString == finalString){
    return true
  }

  return false;
}

palindrome("eye");