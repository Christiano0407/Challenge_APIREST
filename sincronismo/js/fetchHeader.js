//** === Headers Fetch ===  */
import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

const postData = (urlAPI, data) => {
  const response = fetch(urlAPI, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    mode: `cors`,
    credentials: `same-origin`,
    cache: `default`,
    body: JSON.stringify(data),
  });
  return response;
};

const data = {
  title: "New Shoes of Fly",
  price: 100,
  description: "New product for all your family and moment  of Fly",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error de Header"))
  .finally(() => console.log("Finally"));
