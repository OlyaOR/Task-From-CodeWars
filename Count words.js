// Task:
// Kate likes to count words in text blocks. By words she means continuous sequences of English alphabetic characters (from a to z ).
// Kate doesn't like some of words and doesn't count them. Words to be excluded are "a", "the", "on", "at", "of", "upon", "in" and "as", case-insensitive.
// Today Kate's too lazy and have decided to teach her computer to count "words" for her.

//solution:
function wordCount(s) {
    let count = 0;
    const notWordArr = ['a', 'the', 'on', 'at', 'of', 'upon', 'in', 'as'];
    s.match(/[a-z]*/gi).forEach(element => {
        if (!notWordArr.includes(element.toLowerCase()) && element.length > 0) {
            count++
        }
    });
    return count;
}