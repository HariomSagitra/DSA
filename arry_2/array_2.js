//  Liner Search

function LinerSearch(){
    if(size===0){
        return-1;
    }

    // compare all the element of arry with target element

    for(let i=0;i<size;i++){
    if(target===arr[i]){
        return i;
    }
}
return -1;
}

let arr = [7, 9, 6, 0, 4, 90, 5];
let size = arr.length;
let target = 9;

let targetElementIndex = LinerSearch(arr, size, target)
console.log("Target element ", target, "Present at index ", targetElementIndex)

// // Linear Search 
// // T.C-> O(N)

// function linearSearch(arr, n, targetElement) {
//     // size 0 hai to no  target element exist hee nhi karga
//     if (n === 0) {
//         return -1
//     }
//     // compare all the element of array with target element
//     for (let i = 0; i < n; i++) {
//         if (targetElement === arr[i]) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [7, 9, 6, 0, 4, 90, 5];
// let size = arr.length;

// let target = 8726;
// let targetElementIndex = linearSearch(arr, size, target);
// console.log("Target element ", target, "Present at index ", targetElementIndex)
