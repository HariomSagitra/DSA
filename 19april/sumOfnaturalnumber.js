let pr = prompt("Please enter a natural number");

if (pr === null) {
  console.log("Input cancelled by user");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log("Sum is:", sum);
  } else {
    console.log("Please enter a positive number greater than 0");
  }
}


// let prr= prompt("Please enter a natural number");

// if (prr=== null) {
//   console.log("Input cancelled by user");
// } else {
//   let n = Number(prr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else if (n > 0) {
//     let sum = (n*(n+1))/2
    
//     console.log("Sum is:", sum);
//   } else {
//     console.log("Please enter a positive number greater than 0");
//   }
// }