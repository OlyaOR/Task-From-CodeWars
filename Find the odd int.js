// Task:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).

//solution:
function findOdd(Arr) {
    let result = Arr.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    for (const [ key, value ] of Object.entries(result)) {
        if (value % 2 !== 0) return Number(key);
    }
}