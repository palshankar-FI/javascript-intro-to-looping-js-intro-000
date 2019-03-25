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

describe('whileLoop(n)', () => {
  it('counts down from n to 0', () => {
    const spy = chai.spy.on(console, 'log')
    const n = Math.floor(Math.random() * 100)

    expect(whileLoop(n)).to.equal('done')
    expect(spy).to.have.been.called.exactly(n)

    console.log.reset()
  })
})