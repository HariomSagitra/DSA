//1. Print the multiplication table of a given number.

// let n = 7;
// let table = 1;

// for (let i = 1; i <= 10; i++) {
//   table = n * i;
//   console.log(`table of N is ${n}*${i}=${table}`);
// }

//2. Count the number of odd and even digits in a given number.

// let n = [2,35,3,44,34]
// let even_number = 0;
// let odd_number = 0;

// for(let i=0;i<n.length;i++){
//     if(n[i]%2===0){
//         even_number++;
//         console.log("even number is=",n[i])
//     }
//     else{
//         odd_number++;
//          console.log("odd number is=",n[i])
//     }
// }
// console.log(`Total count if even no is=${even_number},Total count of odd no is=${odd_number}`)

// (3) Check whether a given number is a power of 2.

// let n = 4

// if(4===n){
//     console.log("yes is power of 2=2*2=",n)
// }
// else{
//     console.log("not a power of 2")
// }

//(4) Check whether a given number is a Strong Number.
//(A number is Strong if the sum of factorials of its digits is equal to the number itself.)

// let num = 154;
// let copy = num;
// let reminder = 0;
// let new_number = 0;

// while (num > 0) {
//   reminder = num % 10;
//   new_number = new_number + reminder * reminder * reminder;
//   num = Math.floor(num / 10);
// }

// console.log("sum of factorial is", copy, "is=", new_number);

// if (new_number === copy) {
//   console.log("given number is strong no=", copy);
// } else {
//   console.log("not a strong number", copy);
// }

// 5. Find the factorial of a given number.

// let n = 4;
// let copy=n;
// let factorial=1;
// for(n;n>0;n--){
//     factorial = factorial*n;
// }
// console.log(`factorial of ${copy} is=${factorial}`)

//6. Print the Fibonacci series up to N terms.

