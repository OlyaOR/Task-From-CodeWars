// Task:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//solution:
function removeEveryOther(arr){
    for( i = arr.length - 1; i >= 0; i--) {
        if( i % 2 === 1) arr.splice(i,1);
    }
    return arr;
}