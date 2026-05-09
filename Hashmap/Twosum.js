//  Hashing - Hashing ek technique hai jisme kisi value ko
//            ek fixed index/address me convert kiya jata hai
//            taaki data ko fast access kar sake.

// HashMap - HashMap ek data structure hai
//           jo hashing use karta hai.

//      Example
//      let map = new Map();
//      map.set(2, 10);
//      Meaning:
//      key = 2
//      value = 10

//      Important Difference
//      Code	Meaning
//      map.has(key)	key present hai?
//      map.get(key)	value lao
//      map.set(key, value)	store karo

//     Question 1 — TwoSum

// Q.  Given an array of integers nums and an integer target,
//     return the indices of the two numbers such that they add up to target.

//     You may assume that each input has exactly one solution,
//     and you may not use the same element twice.

//     You can return the answer in any order.

// function TwoSum(nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let complit = target - nums[i];

//     if (map.has(complit)) {
//       return [map.get(complit), i];
//     }

//     map.set(nums[i], i);
//   }
//   return [];
// }

// let ans = TwoSum([2, 3, 4, 5], 8);

// console.log(ans);

// Question 2 — Majority Element

//     Given an array nums of size n,
//     return the majority element.

//     The majority element is the element
//     that appears more than ⌊n / 2⌋ times.

//     You may assume that the majority element
//     always exists in the array.

// function Majorityelement(nums) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1);

//     if (map.get(nums[i]) > nums.length / 2) {
//       return nums[i];
//     }
//   }

//   return -1;
// }

// let ans = Majorityelement([1, 2, 2, 2, 1, 2, 3, 3, 2]);

// console.log("Majority element is=",ans)

// Question 3 — Kadane’s Algorithm

//   Given an integer array nums,
//   find the contiguous subarray
//   (containing at least one number)
//   which has the largest sum,
//   and return its sum.

function ContiguouSsubarray(nums) {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    maxSum = Math.max(currentSum, maxSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

let ans = ContiguouSsubarray([1, -2, -3, 4, -1, 1, 2]);

console.log(ans);
