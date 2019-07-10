// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, str = '') {

    // for (let j = 1; j <= n; j++) {
    //     let res = ''
    //     for (i = 1; i <= j; i++) {
    //         res += '#';
    //     }
    //     res += appendSpaces(j,n);
    //     console.log(res);
    // }

    // function appendSpaces(num, step) {
    //     let res = '';
    //     for (let i = num; i < step; i++) {
    //         res += ' ';
    //     }
    //     return res;
    // }

    // let res = '';
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 1; j <= n; j++) {
    //         if (j <= i) {
    //             res += '#';
    //         } else {
    //             res += ' ';
    //         }
    //     }
    //     console.log(res);
    //     res = '';
    // }

    if (n === row) {
        return;
    }

    if (n === str.length) {
        console.log(str);
        return steps(n, row + 1);
    }

    if (str.length <= row) {
        str += '#';
    } else {
        str += ' ';
    }

    steps(n, row, str);

}

module.exports = steps;
