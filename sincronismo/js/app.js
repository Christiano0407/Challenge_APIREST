console.log("Hello");

//** == Callbacks == */
//** === */
const saludar = (nombre) => {
  console.log(`Hola,  ${nombre}`);
};

const callbackSaludar = (callback) => {
  let nombre = "soy Chris Velázquez";
  callback(nombre);
};

//callbackSaludar(saludar);
//** === */
const amigoForever = (amistad) => {
  console.log(`Los años de amistad que tengo con Mau, son: ${amistad}`);
};

const amigaForever = (callbacks) => {
  let amistad = `Veinte años de amistad pura`;
  callbacks(amistad);
};

//amigaForever(amigoForever);
//** === */
const sumOne = (num1, num2) => {
  return num1 + num2;
};

const sumTotal = (num1, num2, callback) => {
  return callback(num1, num2);
};

//console.log(sumTotal(25, 5, sumOne));

//** === */
function helloGirl(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(helloGirl, 2000, ` Alma`);
