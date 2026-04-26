let amount = 1011;

if (amount >= 500) {
  let count = Math.floor(amount / 500);
  console.log("500 ke note" + count);
  amount = amount % 500;
}
if (amount >= 200) {
  let count = Math.floor(amount / 200);
  console.log("200 ke note" + count);
  amount = amount % 200;
}
if (amount >= 100) {
  let count = Math.floor(amount / 100);
  console.log("100 ke note" + count);
  amount = amount % 100;
}
if (amount >= 50) {
  let count = Math.floor(amount / 50);
  console.log("50 ke note" + count);
  amount = amount % 50;
}
if (amount >= 20) {
  let count = Math.floor(amount / 20);
  console.log("20 ke note" + count);
  amount = amount % 20;
}
if (amount >= 10) {
  let count = Math.floor(amount / 10);
  console.log("10 ke note" + count);
  amount = amount % 10;
}
if (amount >= 5) {
  let count = Math.floor(amount / 5);
  console.log("5 ke note" + count);
  amount = amount % 5;
}
if (amount >= 2) {
  let count = Math.floor(amount / 2);
  console.log("2 ke note" + count);
  amount = amount % 2;
}

if (amount === 1) {
  console.log("1 ke note " + amount);
}
