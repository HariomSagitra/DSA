//ak arry ko left side rotate karna hai exple
// arr = [1,2,3,4,5]
// ans = [2,3,4,5,1]

//ak arry ko right side rotate bhi karna hai exple

// ak arry ko right side rotate bhai karna hai or left side bhai rotate karna hai k times
// blud force or optimize dono tariko se karna hiii with extra space
// ak bar or karna hi without extra space

//Remove duplicate from sroted array
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