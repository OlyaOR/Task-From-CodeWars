// Task:
// Given the string representations of two integers, return the string representation of the sum of those integers.
//For example:
//sumStrings('1','2') // => '3'

//solution:
function sumStrings(a,b) { 
    let arr = [a, b];
    return String(arr.reduce((x, y) => BigInt(x) + BigInt(y)));
}