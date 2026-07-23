// Q. sum of all elem of array.
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// Q. Find the Highest elem.
let arr = [10, 2, 0, 5, 78, 55, 98, 4, 1, 25, 98];
let highestELem = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highestELem) {
    highestELem = arr[i];
  }
}
console.log(highestELem);

// Q. Find the 2nd highest elem.
let arr = [5, 45, 65, 55, 1, 2, 35, 78, 98, 25, 22, 3332, 21, 456];
let highElm = Math.max(arr[0], arr[1]);
let SecHighElm = Math.max(arr[0], arr[1]);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highElm) {
    SecHighElm = highElm;
    highElm = arr[i];
  } else if (arr[i] > SecHighElm) {
    SecHighElm = arr[i];
  }
}
console.log(highElm, SecHighElm);

// Q. Reverse the array
// (with extara space new array)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let revArr = new Array(arr.length);

for (let i = arr.length - 1; i >= 0; i--) {
  revArr[i] = arr[i];
}
console.log(revArr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0,
  j = arr.length - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);

let arr = [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1];
let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}
console.log(arr);
