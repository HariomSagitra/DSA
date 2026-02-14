// wap to print below pattern

/*

*****
*****
*****
*****
*****

11111
11111
11111
11111
11111

12345
12345
12345
12345
12345
*/
// function pattenr1(row, column) {
//     let ans = ""
//     for (let i = 1; i <= row; i++) {
//         for (let j = 1; j <= column; j++) {
//             // ans=ans+"*";
//             // ans+=i
//             ans += j;
//         }
//         console.log(ans);
//         ans = ""
//     }
// }

// pattenr1(5,5);

// o/p


// wap to print below pattern
/*

1
12
123
1234
12345

*/
// function pattenr2(row, column) {
//     let ans=""
//     for (let i = 1; i <= row; i++) {
//         for (let j = 1; j <=i; j++) {
//             // ans=ans+"*";
//             // ans+=i
//             ans+=j;
//         }
//         console.log(ans);
//         ans=""
//     }
// }

// pattenr2(5,5);


//Wap to print below pattern-
// function pattenr3(row, column) {
//     let ans = ""
//     for (let i = 1; i <= row; i++) {
//         for (let j = 1; j <= column - i+1; j++) {
//             // ans += "*"
//             // ans+=i;
//             ans+=j
//         }
//         console.log(ans);
//         ans = ""
//     }
// }

// pattenr3(5, 5);


//Wap to print below pattern-
// function pattenr4(row) {
//     let ans = ""
//     let space1=""
   
//         // row 5 hai
//         for (let i = 1; i <= row; i++) {

//             //  ek row me 4 space hai to me space add kar rha hu ans me;
//             for(let space=1;space<=row-i;space++){
//                 space1+=" ";
//             }
//             for (let j = 1; j <= i; j++) {
//                 // ans =ans+space1+"*"
//                 // ans+=space1+i;
//                 ans+=space1+j;
//                 space1=""
    
//             }
//             console.log(ans);
//             ans = ""
            
//         }
// }

// pattenr4(5);



//Wap to print below pattern-
function pattenr5(row) {
    let ans = ""
    let space1=""
   
        // row 5 hai
        for (let i = 0; i < row; i++) {

            //  ek row me 4 space hai to me space add kar rha hu ans me;
            for(let space=row-i;row>space;space++){
                space1+="-";
            }
            for (let j = 1; j <= row-i; j++) {
                // ans =ans+space1+"*"
                // ans+=space1+i;
                ans+=space1+j;
                space1=""
    
            }
            console.log(ans);
            ans = ""
            
        }
}

pattenr5(5);


