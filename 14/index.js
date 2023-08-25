const arrayA = [5, 2, 3, 44, 11];
const arrayB = [2, 4, 21, 8, 13];

let i = 0;

while (i < arrayA.length) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
    i++
}