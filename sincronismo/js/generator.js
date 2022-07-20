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

//** === Generator API === */
import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

const dataAPI = async (urlAPI) => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
  //console.log(data);
};

async function* consumerAPI(urlAPI) {
  try {
    const products = await dataAPI(`${urlAPI}/products`);
    yield console.log(products);
    const product = await dataAPI(`${urlAPI}/products/${products[0].id}`);
    yield console.log(product.title);
    yield console.log(product.price);
    const category = await dataAPI(`${urlAPI}/categories/${product.category.id} `); 
    yield console.log(category.name); 
  } catch (error) {
    console.log("We have an error!");
  }
}

const dg = consumerAPI(API);
console.log(dg.next().value);
console.log(dg.next().value);
console.log(dg.next().value);
console.log(dg.next().value);
