// process.stdout.write("hello ")
// process.stdout.write("world")

// let prompt = require("prompt-sync")();

// let a = prompt("Enter a number=")

// process.stdout.write(a)

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number = "));

// for (let j = 1; j <= n; j++) {
//   for (let i = 1; i <= n; i++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number = "));

// for (let j = 1; j <= n; j++) {
//   for (let i = 1; i <=j; i++) {
//     process.stdout.write(i+" ");
//   }
//   console.log();
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number = "));

// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write( String.fromCharCode(ascii) +" ");
//     ascii++;
//   }
//   console.log();
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number = "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n-i+1; j++) {
//     process.stdout.write("  ");
//   }

//   for(let k=1;k<=i;k++){
//     process.stdout.write("* ")
//   }
//   console.log();
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number = "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n-i+1; j++) {
//     process.stdout.write("  ");
//   }

//   for(let k=1;k<=i;k++){
//     process.stdout.write("  * ")
//   }
//   console.log();
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number = "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if(i==j || i+j == n+1){
//         process.stdout.write("* ")
//     }
//     else{
//         process.stdout.write("  ")
//     }
//   }
//   console.log();
// }

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number = "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2*n-1; j++) {
    if(i==j || i+j == 2*n){
        process.stdout.write("* ")
    }
    else{
        process.stdout.write("  ")
    }
  }
  console.log();
}
