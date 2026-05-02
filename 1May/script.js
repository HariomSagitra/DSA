// console.log("Hariom Dhakad");

// lounch School ak website hiii

//========================================

// 1)Bubble Short Algorithe hai or iski time complecity n^2 hai

// let arr = [10, 5, 12, 1, 3];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//     }
//   }
// }
// console.log(arr)

//========================================

// 2)silesation short Algorithe or iski time complecity

// let arr = [3, 2, 5, 4, 6, 8, 7];

// for (let i = 0; i < arr.length - 1; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[minIndex] > arr[j]) minIndex = j;
//   }

//   if (minIndex != i) {
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp;
//   }
// }

// console.log(arr)

// 3) insersation  short Algorithe or iski time complecity

// let arr = [2, 3, 1, 5, 8, 6, 4];

// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j;

//   for (j = i - 1; j >= 0 && arr[j] > key; j--) {
//     arr[j + 1] = arr[j];
//   }

//   arr[j + 1] = key;
// }

// console.log(arr);

// while loop se

// let arr = [2, 3, 1, 5, 8, 6, 4];

// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;

//   while (j >= 0 && key < arr[j]) {
//     arr[j + 1] = arr[j];
//     j--;
//   }

//   arr[j + 1] = key;
// }

// console.log(arr);