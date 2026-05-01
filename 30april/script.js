//) home work unicode or Ascy value kya hai pata karna hiii

// let H = "Hariom Dhakad"

// for(let i=0;i<H.length;i++){
//     console.log(H[i])
// }

// let H = "Hariom Dhakad"
// for(let i=H.length-1;i>=0;i--){
//     console.log(H[i])
// }

// 1) Reverse karo string ko

// let a = "hariom"
// let b = ""

// for(let i=a.length-1;i>=0;i--){
//     b += a[i]
// }
// console.log(b)

// 2) cheak karo given string is palindrome or note

// let str = prompt("Enter a String");
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// if (rev == str) console.log("is palindrome");
// else console.log("not a palindrome");

// 3) optimize solustion of palindrome string

// let str = prompt("please Enter a String");
// let isPalindrome = true;
// let i = 0;
// let j = str.length - 1;

// while (i < j) {
//   if (str[i] != str[j]) {
//     isPalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }

// if(isPalindrome)console.log("pallindrome")
//     else console.log("no palindrome")

//4) Toggle each charcter

// let str = prompt("please Enter a value");
// let toggle = "";

// for (let i = 0; i < str.length - 1; i++) {
//   let ch = str.charCodeAt(i);

//   if (ch <= 90 && ch >= 66) {
//     toggle = toggle + String.fromCharCode(ch + 32);
//   } else if (ch <= 122 && ch >= 97) {
//     toggle = toggle + String.fromCharCode(ch - 32);
//   }
// }
// console.log(toggle);

// 5) Find the frequense of charater

// let str = prompt("Enter a string");
// let str2 = new Array(128).fill(0);

// for (let i = 0; i < str.length; i++) {
//   let indx = str.charCodeAt(i);
//   str2[indx] = str2[indx] + 1;
// }

// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] > 0) {
//     console.log(String.fromCharCode(i) + "  appearas at " +   str2[i] + " times");
//   }
// }

// printing order shi karne ke liye

let str = prompt("Enter a string");
let str2 = new Array(128).fill(0);
let order = []; // order store karega

// Count + order maintain
for (let i = 0; i < str.length; i++) {
  let indx = str.charCodeAt(i);

  if (str2[indx] === 0) {
    order.push(indx); // pehli baar aaya
  }

  str2[indx]++;
}

// Print in same order
for (let i = 0; i < order.length; i++) {
  let indx = order[i];
  console.log(String.fromCharCode(indx) + " appears " + str2[indx] + " times");
}
