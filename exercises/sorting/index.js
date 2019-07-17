// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minindex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j;
            }
        }
        if (arr[i] > arr[minindex]) {
            const temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
