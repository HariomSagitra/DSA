let pr = prompt("Please enter a natural number");

if (pr === null) {
  console.log("Input cancelled by user");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log("factorial is:", fact);
  } else {
    console.log("Please enter a positive number greater than 0");
  }
}