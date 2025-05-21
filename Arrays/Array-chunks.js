// Array Chunk

// Write a function that takes an array and a chunk size as input.
// The function should return a new array where the original array is split
// into chunks of the specified size

// for Example
// Input : chunk([1,2,3,4,5,6,7,8],3)--> output: [[1,2,3],[4,5,6],[7,8]]
// Input: chunk([1,2,3,4,5],2)--> output: [[1,2],[3,4],[5]]

const chunk = (arr, size) => {
  let index = 0;
  let chunkArray = [];
  while (index < arr.length) {
    let chunked = arr.slice(index, index + size);
    chunkArray.push(chunked);
    index += size;
  }
  console.log(chunkArray);
};
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
chunk([1, 2, 3, 4, 5, 6], 2);
