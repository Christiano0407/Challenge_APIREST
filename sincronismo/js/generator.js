//** == Generators == */
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//*!==== ===  */
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}
const it = iterate([`Pamela`, `Luisa`, `Natalia`, `Mariana`]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
