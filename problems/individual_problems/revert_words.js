// given a sentence, revert the words
function revertWords(str) {
  let newStr = [];
  let words = str.split(" ")
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    newStr = [word].concat(newStr)
  }
  return newStr.join(' ')
}

console.log(revertWords("I went to the store to buy cookie dough"))