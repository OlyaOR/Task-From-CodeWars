// Task:
// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.
// Create as many "shufflings" as you can!

// Examples:
// With input 'a':
// Your function should return: ['a']
// With input 'ab':
// Your function should return ['ab', 'ba']
// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']
// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

//solution:
function permutations(string) {
    let result = [];
    const arr = string.split('');

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(arr)
    return [...new Set(result.map(el => el.join('')))];
}