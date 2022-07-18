//** === Promises With Fetch === */
import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

const fetchData = (urlAPI) => {
  return fetch(urlAPI);
};

fetchData(` ${API}/products `)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(() => console.log("Tenemos los productos"))
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((error) => console.log("Tenemos un error!"))
  .finally(() => console.log("Processing Finally"));
