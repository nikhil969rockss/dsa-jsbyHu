// abc --> cba not a palindrome
// nitin --> nitin is a palindrome

// step --> split the string into array
// reverse the string
// join the string
// compare with the original one

const isPalindrome = (str) => str.split("").reverse().join("") === str;

console.log(isPalindrome("lol"));
