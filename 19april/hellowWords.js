let n = Number(prompt("Enter a number for print hello words"));

if (isNaN(n) || n<=0) {
  console.log("please Enter a valid input");
} else {
  for (let i = 1; i <= n; i++) {
    console.log("Hello Word");
  }
}
