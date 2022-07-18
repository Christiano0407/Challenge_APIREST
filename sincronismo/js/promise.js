const onePromise = new Promise((resolve, reject) => {
  true ? resolve(console.log("Está hecho!")) : reject("Muy Mal!");
});

onePromise
  .then((response) => console.log("Muy bien! Y, Puedes ejecutar código"))
  .catch((error) => console.log("Error!"))
  .finally(() => console.log("Finally Process"));

let ball = 20;

const addBall = new Promise((resolve, reject) => {
  ball > 15
    ? resolve(console.log(`Sí, efectivamente son ${ball} y tenemos que ganar`))
    : reject(console.log("Es menos, y tenemos que comprar más"));
});

addBall
  .then((result) => {
    console.log("Es más!!");
  })
  .catch((error) => console.log("Error!"))
  .finally(() => console.log("Process Finally"));
