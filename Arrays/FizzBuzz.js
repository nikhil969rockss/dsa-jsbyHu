// print 1 to n number
// if number is divisible by 3 and 5 print FizzBuzz
// if it is divisible by 5 print Buzz
// if it is divisible by 3 print Fizz

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
  }
};
fizzBuzz(50);
