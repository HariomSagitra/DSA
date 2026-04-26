let pr = prompt("Please enter a natural number");

if (pr === null) {
  console.log("Input cancelled by user");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        console.log("factor is:", i);
      }
    }
    console.log("factor is:", n);
  } else {
    console.log("Please enter a positive number greater than 0");
  }
}