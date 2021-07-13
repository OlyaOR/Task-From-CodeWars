// Task:
// an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go: Empty string slice is expected when there are no anagrams found.

//solution:
function anagrams(word, words) {
    const arr = words.filter(e => String(e).split('').sort().join('') === String(word).split('').sort().join(''));
    return arr;
}