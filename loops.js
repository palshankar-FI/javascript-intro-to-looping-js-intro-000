var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function forLoop(arr) {
  for (let i = 0; i < 25; i += 1) {
    // arr.push(`"I am ${i} strange loop${i === 0 ?  : s}."`);
    arr.push(`"I am ${i} strange loop."`);
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(`${n}`);
    n -= 1;
  }
  return('done');
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (num > incrementVariable());
}
