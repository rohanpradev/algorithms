// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let rev = '';
    for (let character of str) {
        debugger;
        rev = character + rev;
    }
    return rev;

    // return str.split('').reduce((rev, char) => char + rev, '');
}

// reverse('Rohan');

module.exports = reverse;
