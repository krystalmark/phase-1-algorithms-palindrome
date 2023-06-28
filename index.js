function isPalindrome(word) {

   word = word.replace(/ /g, "").toLowerCase();
  return word === word.split("").reverse().join("");
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  This function removes any spaces from the input string and converts it to lowercase for case-insensitive comparison. Then, it checks if the reversed string is equal to the original string, returning true if they are the same (a palindrome) and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
