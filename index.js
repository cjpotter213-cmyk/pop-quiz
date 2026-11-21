let score = 0;
let userInput;
let answer;

userInput = prompt(`How many sides are on a coin?
    [1] 1
    [2] 2
    [3] 10`);

answer = Number(userInput);
if (Number.isNaN(answer)) {
  alert("You must enter a number");
} else if (answer < 1 || answer > 3) {
  alert("You must enter 1, 2, or 3");
} else {
  if (answer === 1) {
    alert("Incorrect");
  } else if (answer === 2) {
    alert("Correct!");
    score = score + 1;
  } else if (answer === 3) {
    alert("Incorrect");
  }
}

userInput = prompt(`Did we go to the moon?
    [1] Yes
    [2] No`);

answer = Number(userInput);
if (Number.isNaN(answer)) {
  alert("You must enter a number");
} else if (answer < 1 || answer > 2) {
  alert("You must enter 1 or 2");
} else {
  if (answer === 1) {
    alert("Correct!");
    score = score + 1;
  } else if (answer === 2) {
    alert("Incorrect!");
  }
}

userInput = prompt(`Do vegetables exist?
    [1] Yes
    [2] No`);

answer = Number(userInput);
if (Number.isNaN(answer)) {
  alert("You must enter a number");
} else if (answer < 1 || answer > 2) {
  alert("You must enter 1 or 2");
} else {
  if (answer === 1) {
    alert("Incorrect");
  } else if (answer === 2) {
    alert("Correct!");
    score = score + 1;
  }
}

alert(
  `Congratulations on completing the popquiz your final score is ${score} out of 3.`,
);

if (score === 0) {
  alert(`That was rough...`);
} else if (score === 1 || score === 2) {
  alert(`Not bad, but could do better.`);
} else if (score === 3) {
  alert(`Outstanding performance!`);
}
