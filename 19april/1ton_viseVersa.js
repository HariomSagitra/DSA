let n = Number(prompt("please inter a number"));

if (isNaN(n) || n <= 0) {
  console.log("please inter a valid input");
} else {
  console.log("Forward:");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  console.log("Reverse:");
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
