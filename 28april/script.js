//ak arry ko left side rotate karna hai exple
// arr = [1,2,3,4,5]
// ans = [2,3,4,5,1]

//ak arry ko right side rotate bhi karna hai exple

// ak arry ko right side rotate bhai karna hai or left side bhai rotate karna hai k times
// blud force or optimize dono tariko se karna hiii with extra space
// ak bar or karna hi without extra space

//Remove duplicate from sroted array
//merje shorted array
// best time to by and sell stock
// short The color
//maximum subarrau kdhane alforithem;
// majoriti alogorithem for it can called vooting algoritem
// trapinng rain water

//(1)left side rotate array

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0]

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length-1]=copy
// console.log(arr);

//(2) right side rotate array

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length-1];

// for (let i = arr.length-1; i> 0; i--) {
//   arr[i] = arr[i-1]
// }
// arr[0] = copy;
// console.log(arr);

//(3) letft rotasation k times
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Please Enter a Number"));
// k = k % arr.length;

// for (let i = 1; i <= k; i++) {
//   let copy = arr[0];
//   for (let j = 0; j < arr.length - 1; j++) {
//     arr[j] = arr[j + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

//(4) right rotasation k times

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("please Enter a value"));

// for (let j = 1; j <= k; j++) {
//   let copy = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = copy;
// }

// console.log(arr)

//(5) left rotasation by algoritem in array

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter a value"));
// k = k % arr.length;
// let temp = new Array(arr.length);

// for (let i = 0; i <= arr.length - 1; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

//console.log(temp);

//(6)right rotastion by algoritem in array

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("please Enter a value"));
// k = k % arr.length;
// let temp = new Array(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   temp[(k + i) % arr.length] = arr[i];
// }

// console.log(temp);

//  (7)optimize k  time left rotastion

// let arr = [1,2,3,4,5]
// let k = Number(prompt("Enter a value"))
//  k = k%arr.length
//  reverse(0,k-1)
//  reverse(k,arr.length-1)
//  reverse(0,arr.length-1)
//  console.log(arr)

// function reverse(i,j){

//   while(i<j){
//     let temp = arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp

//     i++;
//     j--;
//   }
// }

// 8) optimize k  time right rotastion

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Plese Enter a value"));
// k = k % arr.length;

// reverse(0, arr.length - 1);
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// console.log(arr);
// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     i++;
//     j--;
//   }
// }

// 9) Remove duplicate from sroted array

// let arr = [0, 0, 1, 1, 1, 2, 2, 3];

// let j = 1;
// for (let i = 0; i < arr.length-1; i++) {
//   if (arr[i] != arr[i + 1]) {
//     arr[j] = arr[i+1];
//     j++;
//   }
// }
// console.log(arr);

//10) Merje shorted arrray

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let temp = new Array(arr1.length + arr2.length);

// let i = 0;
// let j = 0;
// let k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     temp[k] = arr1[i];
//     i++;
//     k++;
//   } else {
//     temp[k] = arr2[j];
//     j++;
//     k++;
//   }
// }

// while (i < arr1.length) {
//   temp[k++] = arr1[i++];
// }

// while (j < arr2.length) {
//   temp[k++] = arr2[j++];
// }
// console.log(temp);

//11)  best time to by and sell stock

// let arr = [3, 5, 2, 6, 7, 8, 1];
// let maxprofit = 0;
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) min = arr[i];
//   let profit = arr[i] - min;
//   maxprofit = Math.max(maxprofit, profit);
// }

// console.log(maxprofit);

// short the color

// let arr = [2, 0, 2, 1, 1, 0];

// let i = 0;
// let j = 0;
// let k = arr.length - 1;

// while (i <= k) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j++;
//   } else if (arr[i] == 2) {
//     let temp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = temp;
//     k--;
//   } else {
//     i++;
//   }
// }
// console.log(arr);

// 12) maximum subarrau kdhane alforithem;

//  13) majoriti alogorithem for it can called vooting algoritem

// let arr = [2, 2, 1, 1, 1, 2, 2];

// let ans = arr[0];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (count == 0) {
//     ans = arr[i];
//     count=1;
//   } else if (arr[i] == ans) {
//     count++;
//   } else count--;
// }

// console.log(ans);

// 14)// trapinng rain water

let arr = [4, 2, 0, 3, 2, 5];
let left = new Array(arr.length);
let right = new Array(arr.length);

let maxLeft = arr[0],
  maxRight = arr[arr.length - 1];
((left[0] = maxLeft), (right[right.length - 1] = maxRight));

for (let i = 1; i < arr.length; i++) {
  maxLeft = Math.max(arr[i], maxLeft);
  left[i] = maxLeft;
}

for (let i = arr.length - 2; i >= 0; i--) {
  maxRight = Math.max(arr[i], maxRight);
  right[i] = maxRight;
}

let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans += Math.min(left[i], right[i]) - arr[i];
}

console.log(ans);
