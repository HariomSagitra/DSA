//Q wap to print queue of any no and square of any no.

// let n = 4;
// let square = 1;
// let quape = 1;

// square = n * n;
// quape = n * n * n;

// console.log(`square of ${n} is= ${square}
// quape of ${n} is = ${quape}
//     `);

//Q wap to print 1 to n queue of any no and square of 1 to n no.

// let n = 5;
// let square = 1;
// let quape = 1;

// for (let i = 1; i <= n; i++) {
//   square = i * i;
//   quape = i * i * i;
//   console.log(`square of ${i} is=${square} quape of ${i} is=${quape}`);
// }

//Q Wap to tell how many no is devisible by 7,11,13 from 1 to 100;

// let n= 100;
// let count=0;
// let all_number_is=[];
// let index=0;
// for(let i=1;i<=n;i++){
//     if(i%7===0 || i%11===0 || i%13===0){
//         all_number_is[index] = i;
//         index++;
//         count++;
//     }
// }
// console.log(`number is between 1 to 100 divisible by 7,11,13 total count is=${count} all number is=${all_number_is}`)

// Q Wap to tell how many no is devisible by 3 and 5 both from 1 to 100;(15,30,45,60,75,90)

// let n =100;
// let count=0;
// let all_number_is=[];
// let index = 0;

// for(let i=1;i<=n;i++){
//     if(i%3===0 && i%5===0){
//         all_number_is[index]=i;
//         count++;
//         index++;
//     }
// }
// console.log(`number is between 1 to 100 divisible by 3, and 5 total count is=${count} all number is=${all_number_is}`)

//Q Wap to tell maximum no between 5 no.

let n = [35,35,53,35,22,-77];
let max=[0];
for(let i=0;i<=n.length;i++){
    if(n[i]>max){
        max=n[i]
    }
}
console.log("max number is=",max)
