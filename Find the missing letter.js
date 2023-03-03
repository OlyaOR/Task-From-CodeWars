// Task:
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
//     ['a','b','c','d','f'] -> 'e'
//     ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


//solution:
function findMissingLetter(array) {
    const isUpperCase = array[0].toUpperCase() === array[0];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const newArray = isUpperCase ? array : array.map(letter => letter.toUpperCase());
    const result = alphabet.slice(alphabet.indexOf(newArray[0]), alphabet.indexOf(newArray[0]) + newArray.length).filter(letter => !newArray.includes(letter)).join();
    return isUpperCase ? result : result.toLowerCase();
}