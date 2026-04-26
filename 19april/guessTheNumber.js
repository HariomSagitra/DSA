let random = Math.floor(Math.random() * 100) + 1;

let guess = -1;

while (guess !== random) {

  let input = prompt("Guess the number (1-100)");

  if (input === null) {
    alert("Game cancelled ");
    break;
  }

  guess = Number(input);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert(" Enter number between 1 - 100");
    continue;
  }

  if (guess > random) {
    alert(" Too high, try again");
  } else if (guess < random) {
    alert("Too low, try again");
  } else {
    alert("Congrats! You guessed it right. Number was " + guess);
  }
}