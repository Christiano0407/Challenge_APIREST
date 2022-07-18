const onePromise = new Promise((resolve, reject) => {
  true ? resolve(console.log("Está hecho!")) : reject("Muy Mal!");
});

onePromise
  .then((response) => console.log("Muy bien! Y, Puedes ejecutar código"))
  .catch((error) => console.log("Error!"))
  .finally(() => console.log("Finally Process"));
