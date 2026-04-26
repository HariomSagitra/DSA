let pr = prompt("Please enter a natural number");

if (pr === null) {
  console.log("Input cancelled by user");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 1) {
    let isPrime = true;
    for (let i = 2; i <= n / 2; i++) { 
      if (n % i === 0) {
        isPrime = false;
        break;
      } 
    }
    if(isPrime){
        console.log("this is a prime number",n)
      }
      else{
        console.log("Not a Prime Number")
      }
  } else {
    console.log("Please enter a positive number greater than 1");
  }
}
