function findSumBetter(arr, weight) {
    var hashTable = {};

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i];
        difference = weight - currentElement;

        if (hashTable[difference] != undefined) {
            return [i, hashTable[difference]];
        } else {
            hashTable[difference] = i;
        }
    }

    return -1;
}

function slice(arr, startIndex, endIndex) {
    if (endIndex < startIndex) {
        throw new Error("The start index must greater than start index");
    }
    var result = new Array;
    for (var i = startIndex; i < endIndex; i++) {
        result.push(arr[i]);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(slice(arr, 4, 7));