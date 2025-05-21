// TwoSum

//  Imagine you have a list of numbers and a target number. Your job is
// to find two numbers in that list that add up to the target number.
// You also need to tell which positions (or indexes) those two numbers are at in the list

// Example:
// If the list is [2,7,11,15] and the target is 9. then the answer wrld be [0,1] because 2 (at index 0 ) plus 7 (at index 1) equals 9

// BruteFore Method

const twoSum = (arr, target) => {
  // we loop through the each number once
  for (let i = 0; i < arr.length; i++) {
    //we check each number to the next number if the sum matches the target
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target)
        return [{ indexes: [i, j], values: [arr[i], arr[j]] }];
    }
  }
  return ["couldn't find any indexes"];
};

console.log(twoSum([2, 7, 11, 15], 17));
