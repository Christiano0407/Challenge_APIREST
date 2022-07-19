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