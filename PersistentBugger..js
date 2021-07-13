// Task:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//For example:
//persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

//solution:
function persistence(num) {
    let count = 0;
    num = String(num);
    while(num.length > 1) { 
        count++; 
        num = String([...num].reduce((a,b) => a * b));
    }
    return count;
}