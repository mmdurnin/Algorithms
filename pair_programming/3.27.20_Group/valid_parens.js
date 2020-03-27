// Interviewee = Bob, interviewer = Lance

/*
1. create key of openners and key of closers
2. create stack to store openners
3. iterate through string
  - if s[i] in openners, push into stack
  - else
    - if !stack.length return false
    - if openners[stack[-1]] !==  closers[s[i]] return false, else stack.pop
4. After iterrating, return false if stack.length, else return true
*/

function validParens(s) {
  const openners = {'(': 1, '[': 2, '{': 3};
  const closers = {')': 1, ']': 2, '}': 3};
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char in openners) stack.push(char);
    if (char in closers) {
      if (!stack.length) return false;
      let compare = stack[stack.length - 1];

      if (openners[compare] !== closers[char]){
        return false
      } else {
        stack.pop()
      }
    }
  }

  return (!stack.length) ? true : false;
}

console.log(validParens('((()))'));