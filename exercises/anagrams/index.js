// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const stringAanagram = {};
    const stringBanagram = {};

    for (let char of stringA.replace(/[^\w]/g, '').toLowerCase()) {
        stringAanagram[char] = stringAanagram[char] + 1 || 1;
    }
    for (let char of stringB.replace(/[^\w]/g, '').toLowerCase()) {
        stringBanagram[char] = stringBanagram[char] + 1 || 1;
    }

    if (Object.keys(stringAanagram).length !== Object.keys(stringBanagram).length) {
        return false;
    } else {
        for (let temp in stringAanagram) {
            if (stringAanagram[temp] !== stringBanagram[temp]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = anagrams;
