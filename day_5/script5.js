//(1)

// function firstquestion(row) {
//   let ans = "";

//   for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= i; j++) {
//       ans += "*";
//     }
//     console.log(ans);
//     ans = "";
//   }
// }
// firstquestion(5);

//(2)

// function firstquestion(row) {
//   let ans = "";
//   let space = "";

//   for (let i = 1; i <= row; i++) {
//     for (let sp = 1; sp <= row - i; sp++) {
//       space += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       ans += space + "*";
//       space = "";
//     }
//     console.log(ans);
//     ans = "";
//   }
// }
// firstquestion(7);

//(3)

function firstquestion(row) {
  let ans = "";
  let space = "";

  for (let i = 1; i <= row; i++) {
    for (let sp = 1; sp <= row - i; sp++) {
      space += " ";
    }
    for (let j = 1; j <= i; j++) {
      ans += space + "*";
      space = "";
    }
    console.log(ans);
    ans = "";
  }
}
firstquestion(7);

