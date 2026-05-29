// function RotateArrayByPosition(arr, position) {
//     let arr1 = []
//     let arr2 = []
//     let ans = []

//     // break karo original array ko 2 array me 

//     //  ek part bna leaya [1,2,3]
//     for (let i = 0; i <= position; i++) {
//         arr1[i] = arr[i];
//     }



//     //  dusra  part bna leaya [4,5,6]
//     let j = 0;
//     for (let i = pos + 1; i <= arr.length - 1; i++) {
//         arr2[j] = arr[i];
//         j++;
//     }


//     console.log("first part ", arr1)
//     console.log("second part", arr2)

//     // merge kar do dusra part pahle aaega and 1st vala part bad me aaeyega
//     ans = [...arr2, ...arr1];
//     console.log(ans)

// }


// let array = [1, 2, 3, 4, 5, 6]
// let pos = 3

// RotateArrayByPosition(array, pos);
// console.log("Original Array",array)

// TC - O(N)
// SC - O(N)


//  Optimise way
// function reverseArray(arr, start, end) {

//     while (start <= end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// function rotateArrayByPosition() {


//     console.log("Original Array ", array1);

//     //  reverse karunga 0 se lekar ke position tak 
//     reverseArray(array1, 0, position);
//     console.log("original array after 0 to position reverse", array1);

//     //  reverse karunga position+1 se lekar ke n-1 tak 


//     reverseArray(array1, position + 1, array1.length - 1)
//     console.log("original array after position+1 to n reverse", array1);


//     // reverse the array from 0 to n-1
//     reverseArray(array1, 0, array1.length - 1)
//     console.log("reverse array   ", array1)
// }


// let array1 = [1, 2, 3, 4, 5, 6];
// let position = 2;

// rotateArrayByPosition(array1, position);



// Q.2 let arr[1,2,3,4,5,6] pos=2, o/p=[3,2,1,6,5,4]

// function reverseArrayByK(arr, start, end) {

//     while (start <= end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// function rotateArrayByK() {

//     console.log("Original Array ", array1);

//     //  reverse karunga 0 se lekar ke position tak 
//     reverseArrayByK(array1, 0, position);
//     console.log("original array after 0 to position reverse", array1);

//     //  reverse karunga position+1 se lekar ke n-1 tak 

//     reverseArrayByK(array1, position + 1, array1.length - 1)
//     console.log("original array after position+1 to n reverse", array1);

// }


// let array1 = [1, 2, 3, 4, 5, 6];
// let position = 2;

// rotateArrayByK(array1, position);



// Q.3


// function maximumDigitOddSum(arr) {
//     let ans = [];

//     // traverse karo
//     for (let value of arr) {
//         let sum = 0;
//         // digit ka sum kar rha hu
//         while (value != 0) {
//             sum = sum + value % 10;
//             value = Math.floor(value / 10);
//         }
//         ans.push(sum);
//     }
//     console.log("sum of array elemenet digit", ans)// we have digit sum

//     //  maximmum odd sum nikalo
//     let maximumOddSum = -Infinity
//     for (let data of ans) {

//         //  
//         if (data % 2 !== 0) {
//             if (data > maximumOddSum) {
//                 maximumOddSum = data;
//             }
//         }

//     }
//     console.log("Maximum odd sum is ", maximumOddSum)

// }

// let arr = [123, 56, 89, 234, 47, 91]
// console.log("array is ", arr)

// maximumDigitOddSum(arr);

// Normal Syntex 

function maximumDigitOddSum(arr) {
    let ans = [];

    // traverse karo
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        // digit ka sum kar rha hu
        while (arr[i] != 0) {
            sum = sum + arr[i] % 10;
            arr[i] = Math.floor(arr[i] / 10);
        }
        ans.push(sum);
    }
    console.log("sum of array elemenet digit", ans)// we have digit sum

    //  maximmum odd sum nikalo
    let maximumOddSum = -Infinity
    for (let i = 0; i < ans.length; i++) {
        {

            //  
            if (ans[i] % 2 === 0) {
                if (ans[i] > maximumOddSum) {
                    maximumOddSum = ans[i];
                }
            }

        }


    }
    console.log("Maximum even sum is ", maximumOddSum)
}
let arr = [123, 56, 89, 234, 47, 91]
console.log("array is ", arr)

maximumDigitOddSum(arr);