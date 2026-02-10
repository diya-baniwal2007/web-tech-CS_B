const checkResult = (...marks) =>
  marks.reduce((a, b) => a + b, 0) / marks.length >= 40
    ? "Pass"
    : "Fail";
console.log(checkResult(70,80));