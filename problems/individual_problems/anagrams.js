// Write a function, `anagrams(str1, str2)`, that takes in two words and returns
// a boolean indicating whether or not the words are anagrams. Anagrams are
// words that contain the same characters but not necessarily in the same order.
// Solve this without using Array.prototype.sort.
//
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let counter = {};

  for (let i = 0; i < str1.length; i++) {
    counter[str1[i]] = !!counter[str1[i]] ? counter[str1[i]] + 1 : 1
    counter[str2[i]] = !!counter[str2[i]] ? counter[str2[i]] - 1 : -1
  }

  let keys = Object.keys(counter)

  for (let i = 0; i < keys.length; i++) {
    if (counter[keys[i]] !== 0) return false
  }

  return true
}

console.log(anagrams("maureen", "neeruam"))
console.log(anagrams("redcar", "racecar"))