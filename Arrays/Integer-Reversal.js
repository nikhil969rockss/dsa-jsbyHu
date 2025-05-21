// 123 --> 321
// Same as string reversal
// steps -->  change number into string
//            split the string into array
//            reverse the string
//            join the string

const reverseInteger = (int) => {
  const reversedStr = int.toString().split("").reverse().join("");
  const reverseInt = parseInt(reversedStr);
  if (!reverseInt) return console.log("Only integer is allowed");
  else return reverseInt * Math.sign(int);
};

console.log(reverseInteger("89"), reverseInteger("123"));
