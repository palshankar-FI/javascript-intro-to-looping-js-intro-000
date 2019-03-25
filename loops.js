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
  it ('console logs "I run once regardless." 1 time when passed an integer of 0 as a parameter.', () => {
      const spy = chai.spy.on(console, 'log');
      doWhileLoop(0);
      expect(spy).to.have.been.called.exactly(1);
  })

  it ('console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.', () => {
    const spy = chai.spy.on(console, 'log');
    doWhileLoop(10);
    expect(spy).to.have.been.called.exactly(10);
  })
})
