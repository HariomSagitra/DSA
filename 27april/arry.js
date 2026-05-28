// let array = new Array(5);

// for (let i = 0; i < array.length; i++) {
//   array[i] = Number(prompt("please Enter number"));
// }
// console.log(array);

// let arr = [10,30,40,67]
// let sum = 0;

// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i]
// }
// console.log(sum)

// let arr = [24,33,85,66,77]
// let max = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max);

// let arr = [232, 33, 55, 667, 88];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let arr = [12, 23, 33, 55, 55];

// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (max < arr[i]) {
//     smax = max;
//     max = arr[i];
//   } else if (smax < arr[i] && max != arr[i]) {
//     smax = arr[i];
//   }
// }

// console.log(smax)

// let arr = [10,20,30,33,44];

// let temp = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// }
// console.log(arr);

// let arr = [10,20,30,40,50]
// let temp = new Array(arr.length)

// let j=0;
// for(let i=arr.length-1;i>=0;i--){
//     temp[j]=arr[i]
//     j++
// }
// console.log(temp)

// let arr = [11, 12, 14, 15, 16];

// let i = 0;
// let j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;

//   i++;
//   j--;
// }
// console.log(arr);

let arr = [1, 0, 1, 0, 1, 1, 1, 0];

let i = 0;
let j = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}
console.log(arr);
