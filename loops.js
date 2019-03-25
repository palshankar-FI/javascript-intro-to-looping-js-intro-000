var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for (let i = 0; i < 25; i += 1) {
    array.push(`"I am ${i} strange loop${i === 0 ?  : s}."`);
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
    num -= 1;
  } while (num > 0);
}


