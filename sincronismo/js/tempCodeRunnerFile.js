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