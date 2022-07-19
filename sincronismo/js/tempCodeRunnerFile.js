import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

const fetchData = async (urlAPI) => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
};

const dataConsumer = async (urlAPI) => {
  try {
    const products = await fetchData(`${urlAPI}/products`);
    const product = await fetchData(` ${urlAPI}/products/${products[0].id} `);
    const category = await fetchData(
      `${urlAPI}/categories/${product.category.id} `
    );
    const users = await fetchData(`${urlAPI}/users`);
    //const user = await fetchData(`${urlAPI}/users/ `);

    console.log(products);
    console.log(product.title);
    console.log(product.price);
    console.log(product.description);
    console.log(category.name);
    console.log(users);
    console.log(users.name);
  } catch (error) {
    console.log("Error! Error!");
  }
};

console.log(dataConsumer(API));