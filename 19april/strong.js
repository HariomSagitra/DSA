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
        let copy = n;
        let sum = 0;
        while(n>0){
            let rem = n%10;
            let fact = 1;
             for(let i=1;i<=rem;i++){
                fact= fact *i;
             }
             sum = sum + fact;
            n= Math.floor(n/10);
        }
        if(copy === sum){
            console.log("number is strong number",sum)
        }else{
            console.log("not a strong number")
        }
    }
    else{
        console.log("please inter postitive value")
    }
  }
}
