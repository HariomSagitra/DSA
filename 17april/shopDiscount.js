let amount = Number(prompt("Please enter your amount"));

let dis = 0;

if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5000 && amount <= 7000) {
  dis = 5;
} else if (amount > 7000 && amount <= 8000) {
  dis = 10;
} else if (amount > 8000) {
  dis = 20;
} else {
  console.log("please enter valid input");
}

console.log(amount - Math.floor((dis * amount) / 100));
