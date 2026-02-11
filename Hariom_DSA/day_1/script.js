// 1. write a program to print hello

// for(let i = 1; i <= 5 ; i++){
//     console.log("Hello");
// }

// 2. write a program 1 to n where n can be anything

// let n = 10;

// for(let i =1; i<=n;i++){
//     console.log(i)
// }

// 3. way to print all the even no from 0 to n where n can be anything.

// let n = 10;

// for(let i=0; i<=n;i=i+2){
//    console.log("even no is=",i)
// }

// .4 way to print all the odd no from 0 to n where n can be anything.

// let n = 10;

// for(let i=1; i<=n;i=i+2){
//    console.log("Odd no is=",i)
// }

// 5. wap to print n to 1 where n can be anything.

// let n = 10
// for(let i=n;i>=1;i--){
//     console.log("n to 1 nember is=",i)
// }

// 6. wap to print all even no and odd no from 1 to n where n can be anything.

// let n =10;

// for(let i=1; i<=n;i++){
//     if(i%2===0){
//         console.log("number is even=",i)
//     }
//     else{
//         console.log("number is odd=",i)
//     }
// }

// 7.wap to print to tell enter year is leap year or not

// answer-: asa year jo 4,400,100 se devide ho leap year kahlata haiii
//let year = 2022;

// for (let year = 2000; year <= 2026;year++) {
//   if (year % 4 === 0 || year % 400 === 0 || year % 100 === 0) {
//     console.log("This year is leap year=", year);
//   } else {
//     console.log("ye leap year nhi haii=", year);
//   }
// }

// 8. wap to tell enter no. positive/negitive or zero

// let input= prompt("Enter a number");
// let n=Number(input);

// if(isNaN(n)){
//     console.log("Enter no is Invalid=",n)
// }
// else if(n>0){
//     console.log("Number is positive=",n)
// }
// else if(n<0){
//     console.log("Number is negitive=",n)
// }
// else{
//     console.log("Number is zero=",n)
// }

// 9. write a program to print the sum of 1 to n (1 se leker 10 tak ke number ka sum)

// let n =10;

// let sum = n*(n+1)/2;
// console.log("sum of 1 to ",n, "is =",sum)

// let n = 10;
// let allsum = 0;
// for (let i = 1; i <= n; i++) {
//   allsum +=i;
// }
// console.log("sum of all number=", allsum);

// wap to print the product of 1 to n (1 se leaker 10 tak ke no ka product batao)

// let n = 10;
// let productall = 1;

// for(let i = 1; i<=n;i++){
//     productall = productall*i;
// }
// console.log(productall)

// 11. write a program to print sum of all even and odd no.

let n =10;
let oddall=0;
let evenall=0;

for(let i=1;i<=n;i++){
    if(i%2===0){
        evenall += i;
    }else{
        oddall += i;
    }
}
console.log("even all number sum is=",evenall, "odd all number sum is=",oddall)