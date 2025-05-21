// hello world --> Hello World
// steps --> change all the string to lowercase
//           split the string into array
//           transverse to the array and Change only first index capitalize
//           slice the other part of the string and concat with first letter
//           join the array

const sentenceCapitalization = (str) => {
  const splittedStr = str
    .toLowerCase()
    .split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
  console.log(splittedStr);
};
sentenceCapitalization("hello brother how are you");
