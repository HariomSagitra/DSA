let pr = prompt("Please enter a natural number");

if (pr === null) {
  console.log("Input cancelled by user");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } 
  else {
    if(n>0){
        
        let reverse = 0;
        while(n>0){
            let rem = n%10;
            reverse = reverse*10 + rem
            n= Math.floor(n/10);
        }
        console.log(reverse);
    }
    else{
        console.log("please inter postitive value")
    }
  }
}
