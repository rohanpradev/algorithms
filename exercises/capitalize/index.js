// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // let result = '';
    // for (let ele of str.split(' ')) {
    //     ele = ele[0].toUpperCase() + ele.slice(1);
    //     if (result) {
    //         result += ' ' + ele;
    //     } else {
    //         result = ele;
    //     }
    // }
    // return result;

    let result = str[0].toUpperCase() || '';
    for (let i = 1; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i] + str[i + 1].toUpperCase();
            ++i;
        } else {
            result += str[i];
        }
    }
    return result;

}

module.exports = capitalize;
