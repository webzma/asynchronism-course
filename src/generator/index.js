function* gen() {
  yield 1
  yield 2
  yield 3
}

const generator = gen()
console.log(generator.next().value);

function* iterate(array) {
  for(let value of array) {
    yield value
  }
}

const something = iterate(['cococete', 'chupeta', 'helado'])
console.log(something.next());
console.log(something.next());