// Task:
// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments.
// But be careful, some of your arguments can be arrays of numbers or nested arrays.

//solution:
function smartSum(...arg) {
    const arrArg = [...arg];
    let count = 0;
    arrArg.forEach(arg => Array.isArray(arg) ? count = count + smartSum(...arg) : count = count + arg)
    return count;
}