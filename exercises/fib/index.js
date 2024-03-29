// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function slowfib(n) {
//     // function fib(n) {
//     // const arr = [0, 1];

//     // for (let i = 2; i <= n; i++) {
//     //     arr.push(arr[i - 1] + arr[i - 2]);
//     // }

//     // return arr[arr.length - 1];

//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// function memoize(fn) {

//     const cache = {};
//     return function (...args) {
//         if (cache[args]) {
//             return cache[args];
//         }

//         const result = fn.apply(this, args);
//         cache[args] = result;
//         return result;
//     }
// }

// const fib = memoize(slowfib);





function memoize(fn) {

    const cache = {};
    return function (args) {
        debugger;
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.call(this, args);
        cache[args] = result;
        return result;
    }


}

function slowfib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowfib);

// fib(20);

module.exports = fib;